
import random
import requests
import string
from datetime import datetime, timedelta
from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from models import db, User,Contact,ContactUs,Enquiry
from email_validator import validate_email, EmailNotValidError
from twilio.rest import Client
app = Flask(__name__)
otp_store = {}

app.config['SECRET_KEY'] = 'cairocoders-ednalan'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:123456@localhost/ndb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['JWT_SECRET_KEY'] = 'super-secret'  # Change this to a long, random string in production
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = False  # Token doesn't expire for demonstration purposes

bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True, resources={r"/*": {"origins": "http://localhost:3000"}})
db.init_app(app)
jwt = JWTManager(app)

with app.app_context():
    db.create_all()

# Securely load Elastic Email API key from environment variable


def generate_otp(length=6):
    characters = string.digits
    otp = ''.join(random.choice(characters) for _ in range(length))
    return otp

def send_otp_email(email, otp):
    email_body = f"<html><body><h2>Your OTP for password reset is:</h2><p>{otp}</p></body></html>"
    
    try:
        response = requests.post(
            "https://api.elasticemail.com/v2/email/send",
            data={
                "apikey":"696B1C556C0611EF31D8A02E22987AAD361EE51547B47CFC8A56DDBBB4F00CA215F783AEB4C1C9AE5B9256ECF422F2F4",  # Securely load API key
                "subject": "Your OTP for Password Reset",
                "from": "its94364@gmail.com",  # Replace with your sender email
                "to": email,
                "bodyHtml": email_body
            }
        )
        
        if response.status_code == 200:
            return True
        else:
            app.logger.error(f"Failed to send OTP: {response.text}")
            return False
    except Exception as e:
        app.logger.error(f"Failed to send email: {e}")
        return False

@app.route("/")
def hello_world():
    return "Hello, World!"

@app.route("/register", methods=["POST"])
def signup():
    email = request.json["email"]
    password = request.json["password"]
    mobilenumber = request.json["mobilenumber"]
    address = request.json["address"]
    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "Email already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(email=email, password=hashed_password,  mobilenumber=mobilenumber, address=address)
    db.session.add(new_user)

    try:
        db.session.commit()
        session["user_id"] = new_user.id
        return jsonify({
            "id": new_user.id,
            "email": new_user.email,
            "mobilenumber": new_user.mobilenumber,
            "address": new_user.address
        })
    except Exception as e:
        app.logger.error("An error occurred while processing /register request: %s", str(e))
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized Access"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify({
        "access_token": access_token,
        "user": {
            "id": user.id,
            "email": user.email,
        }
    })
@app.route('/forgot', methods=['POST'])
def forgot_password():
    data = request.get_json()
    email = data.get('email')

    if not email:
        return jsonify({'error': 'Email is required'}), 400

    try:
        validate_email(email)
    except EmailNotValidError as e:
        return jsonify({'error': str(e)}), 400

    otp = generate_otp()
    expiration_time = datetime.now() + timedelta(minutes=10)
    otp_store[email] = {'otp': otp, 'expires_at': expiration_time}

    if send_otp_email(email, otp):
        return jsonify({'message': 'OTP sent to email'}), 200
    else:
        return jsonify({'error': 'Error sending OTP email'}), 500

@app.route('/verify-otp', methods=['POST'])
def verify_otp():
    data = request.get_json()
    email = data.get('email')
    entered_otp = data.get('otp')

    if not email or not entered_otp:
        return jsonify({'error': 'Email and OTP are required.'}), 400

    if email not in otp_store:
        return jsonify({'error': 'OTP not found or expired.'}), 400

    stored_otp = otp_store[email]['otp']
    expires_at = otp_store[email]['expires_at']

    if datetime.now() > expires_at:
        return jsonify({'error': 'OTP expired.'}), 400

    if str(entered_otp) == str(stored_otp):
        return jsonify({'message': 'OTP verified successfully'}), 200
    else:
        return jsonify({'error': 'Invalid OTP'}), 400

@app.route('/reset_password', methods=['POST'])
def reset_password():
    data = request.get_json()
    email = data.get('email')
    new_password = data.get('password')

    if not email or not new_password:
        return jsonify({'error': 'Email and new password are required.'}), 400

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({'error': 'Invalid email address.'}), 400

    hashed_password = bcrypt.generate_password_hash(new_password).decode('utf-8')
    user.password = hashed_password

    try:
        db.session.commit()
        return jsonify({'message': 'Password reset successful.'}), 200
    except Exception as e:
        app.logger.error("An error occurred while resetting the password: %s", str(e))
        db.session.rollback()
        return jsonify({'error': 'An error occurred while resetting the password.'}), 500
@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json()

    if not all(key in data for key in ("email", "course")):
        return jsonify({"error": "Missing required fields"}), 400

    email = data["email"]
    course = data["course"]
    mobilenumber = data.get("mobilenumber")
    address = data.get("address")

    contact_exists = Contact.query.filter_by(email=email).first() is not None
    if contact_exists:
        return jsonify({"error": "Email already exists"}), 409

    new_contact = Contact(email=email, course=course, mobilenumber=mobilenumber, address=address)
    db.session.add(new_contact)

    try:
        db.session.commit()

        if mobilenumber:
            account_sid = 'ACee7f7772d3659280bbf6501327c2b269'
            auth_token = '37ba92520c9c4bf1067f718e8431b421'
            client = Client(account_sid, auth_token)

            try:
                message = client.messages.create(
                    from_='+15079365042',  # Replace with your valid Twilio number
                    body='Congratulations, you are successfully Book course.',
                    to='+91' + mobilenumber  # Ensure the number format is correct
                )

                if message.sid:
                    app.logger.info("SMS sent successfully")

            except Exception as e:
                app.logger.error("Twilio error: %s", str(e))
                return jsonify({"error": "Failed to send SMS"}), 500

        return jsonify({
            "id": new_contact.id,
            "email": new_contact.email,
            "course": new_contact.course,
            "mobilenumber": new_contact.mobilenumber,
            "address": new_contact.address
        }), 201
    except Exception as e:
        app.logger.error("An error occurred while processing /contact request: %s", str(e))
        db.session.rollback()
        return jsonify({"error": "An error occurred while creating the contact"}), 500
@app.route('/contactus', methods=['POST'])
def contactus():
    data = request.json

    # Validate required fields
    if not all(key in data for key in ('name', 'email', 'mobilenumber', 'address', 'message')):
        return jsonify({'error': 'Missing required fields'}), 400

    name = data['name']
    email = data['email']
    mobilenumber = data['mobilenumber']
    address = data['address']
    message = data['message']

    # Check if the email already exists
    existing_contact = ContactUs.query.filter_by(email=email).first()
    if existing_contact:
        return jsonify({'error': 'Email already exists'}), 409

    # Create a new contact inquiry
    new_contact = ContactUs(name=name, email=email, mobilenumber=mobilenumber, address=address, message=message)
    db.session.add(new_contact)

    try:
        db.session.commit()
        if mobilenumber:
            account_sid = 'ACee7f7772d3659280bbf6501327c2b269'
            auth_token = '37ba92520c9c4bf1067f718e8431b421'
            client = Client(account_sid, auth_token)

            try:
                message = client.messages.create(
                    from_='+15079365042',  
                    body='Thank You for contacting. We have received your message,we contact you within day.',
                    to='+91' + mobilenumber  
                )

                if message.sid:
                    app.logger.info("SMS sent successfully")

            except Exception as e:
                app.logger.error("Twilio error: %s", str(e))
                return jsonify({"error": "Failed to send SMS"}), 500
        return jsonify({
            'id': new_contact.id,
            'name': new_contact.name,
            'email': new_contact.email,
            'mobilenumber': new_contact.mobilenumber,
            'address': new_contact.address,
            'message': new_contact.message
        }), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': 'An error occurred while creating the contact inquiry'}), 500
@app.route('/enquiry', methods=['POST'])
def enquiry():
    data = request.json

    # Validate required fields
    if not all(key in data for key in ('name', 'email', 'mobilenumber', 'address', 'message')):
        return jsonify({'error': 'Missing required fields'}), 400

    name = data['name']
    email = data['email']
    mobilenumber = data['mobilenumber']
    address = data['address']
    message = data['message']

    # Check if the email already exists
    existing_enquiry = Enquiry.query.filter_by(email=email).first()
    if existing_enquiry:
        return jsonify({'error': 'Email already exists'}), 409

    # Create a new enquiry
    new_enquiry = Enquiry(name=name, email=email, mobilenumber=mobilenumber, address=address, message=message)
    db.session.add(new_enquiry)

    try:
        db.session.commit()
        if mobilenumber:
            account_sid = 'ACee7f7772d3659280bbf6501327c2b269'
            auth_token = '37ba92520c9c4bf1067f718e8431b421'
            client = Client(account_sid, auth_token)

            try:
                message = client.messages.create(
                    from_='+15079365042',  
                    body='Thank You for contacting. We have received your message,we contact you within day.',
                    to='+91' + mobilenumber  
                )

                if message.sid:
                    app.logger.info("SMS sent successfully")

            except Exception as e:
                app.logger.error("Twilio error: %s", str(e))
                return jsonify({"error": "Failed to send SMS"}), 500
        return jsonify({
            'id': new_enquiry.id,
            'name': new_enquiry.name,
            'email': new_enquiry.email,
            'mobilenumber': new_enquiry.mobilenumber,
            'address': new_enquiry.address,
            'message': new_enquiry.message
        }), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': 'An error occurred while creating the enquiry'}), 500
@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    return jsonify(logged_in_as=user.email), 200

if __name__ == "__main__":
    app.run(debug=True)
