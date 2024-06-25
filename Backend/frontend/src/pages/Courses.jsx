import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Contact from './Contact'; // Import the Contact component
import './Courses.css';

function Courses() {
  const [showContactModal, setShowContactModal] = useState(false);

  const handleShowContactModal = () => setShowContactModal(true);
  const handleCloseContactModal = () => setShowContactModal(false);

  return (
    <div className='courses'>
      <h1>Our Courses</h1>
      <Row className="mb-4">
        <Col>
          <Card className="custom-cardc">
            <Card.Img variant="top" src="https://www.rnwmultimedia.edu.in/images/reactjs.jpg" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <ul className="card-listc">
                  <li><i className="fa-solid fa-bars"></i> Advanced</li>
                  <li><i className="fa-regular fa-clock"></i> 1 Year</li>
                  <li><i className="fa-solid fa-book-open"></i> Lesson</li>
                </ul>
              </Card.Text>
              <Button variant="white" onClick={handleShowContactModal}>Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="custom-cardc">
            <Card.Img variant="top" src="https://devopsschool.com/assets/assets1/images/courses/java-se-version.png" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <ul className="card-listc">
                  <li><i className="fa-solid fa-bars"></i> Advanced</li>
                  <li><i className="fa-regular fa-clock"></i> 1 Year</li>
                  <li><i className="fa-solid fa-book-open"></i> Lesson</li>
                </ul>
              </Card.Text>
              <Button variant="white" onClick={handleShowContactModal}>Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="custom-cardc">
            <Card.Img variant="top" src="https://5.imimg.com/data5/SK/FD/EF/ANDROID-28363567/product-jpeg-500x500.jpeg" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <ul className="card-listc">
                  <li><i className="fa-solid fa-bars"></i> Advanced</li>
                  <li><i className="fa-regular fa-clock"></i> 1 Year</li>
                  <li><i className="fa-solid fa-book-open"></i> Lesson</li>
                </ul>
              </Card.Text>
              <Button variant="white" onClick={handleShowContactModal}>Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="custom-cardc">
            <Card.Img variant="top" src="https://media.licdn.com/dms/image/C4D12AQHIXQf1W0x7ew/article-cover_image-shrink_600_2000/0/1626803605227?e=2147483647&v=beta&t=NV6ADlyapbYBdOCTuTyktvRxMUQ6brbpF7P5UeU0EH8" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <ul className="card-listc">
                  <li><i className="fa-solid fa-bars"></i> Advanced</li>
                  <li><i className="fa-regular fa-clock"></i> 1 Year</li>
                  <li><i className="fa-solid fa-book-open"></i> Lesson</li>
                </ul>
              </Card.Text>
              <Button variant="white" onClick={handleShowContactModal}>Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="custom-cardc">
            <Card.Img variant="top" src="https://www.rnwmultimedia.edu.in/images/reactjs.jpg" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <ul className="card-listc">
                  <li><i className="fa-solid fa-bars"></i> Advanced</li>
                  <li><i className="fa-regular fa-clock"></i> 1 Year</li>
                  <li><i className="fa-solid fa-book-open"></i> Lesson</li>
                </ul>
              </Card.Text>
              <Button variant="white" onClick={handleShowContactModal}>Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="custom-cardc">
            <Card.Img variant="top" src="https://devopsschool.com/assets/assets1/images/courses/java-se-version.png" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <ul className="card-listc">
                  <li><i className="fa-solid fa-bars"></i> Advanced</li>
                  <li><i className="fa-regular fa-clock"></i> 1 Year</li>
                  <li><i className="fa-solid fa-book-open"></i> Lesson</li>
                </ul>
              </Card.Text>
              <Button variant="white" onClick={handleShowContactModal}>Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for Contact form */}
      <Modal show={showContactModal} onHide={handleCloseContactModal}>
        <Modal.Header closeButton>
          <Modal.Title>Book Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Contact />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseContactModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Courses;
