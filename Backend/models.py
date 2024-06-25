from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)  # Use an auto-incrementing integer field for ID
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.Text, nullable=False)
    mobilenumber = db.Column(db.BigInteger) 
    address = db.Column(db.String(250))
class Contact(db.Model):
    __tablename__ = "contact"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)  # Use an auto-incrementing integer field for ID
    email = db.Column(db.String(150), unique=True)
    course = db.Column(db.String(50), nullable=False)
    mobilenumber = db.Column(db.BigInteger) 
    address = db.Column(db.String(250))
class ContactUs(db.Model):
    __tablename__ = "contactus"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    mobilenumber = db.Column(db.String(20))
    address = db.Column(db.String(200))
    message = db.Column(db.Text)
class Enquiry(db.Model):
    __tablename__ = "enquiry"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)  # Use an auto-incrementing integer field for ID
    name = db.Column(db.String(150))
    email = db.Column(db.String(150), unique=True)
    mobilenumber = db.Column(db.BigInteger) 
    address = db.Column(db.String(250))
    message = db.Column(db.String(250))