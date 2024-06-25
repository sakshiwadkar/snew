import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Instructors.css';

const instructors = [
  { id: 1, src: 'https://www.shutterstock.com/image-photo/id-photo-portrait-handsome-mature-260nw-1592137060.jpg', name: 'XYZ', info: 'Education:B.Tech Experience:4 Years' },
  { id: 2, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-v0wd_jLo6yO00kv_CJYqIZrYTxGxHK-InP7wBQlrgGZ6GH4qnOiTJdM5ROhKL5CIQs&usqp=CAU', name: 'XYZ', info: 'Education:B.Tech Experience:4 Years' },
  { id: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShk1FhmPHrDoog_PTjddZ97sn6H5ZPf-_mbw&usqp=CAU', name: 'XYZ', info: 'Education:M.Tech Experience:6 Years' },
  { id: 4, src: 'https://www.shutterstock.com/image-photo/id-photo-portrait-handsome-mature-260nw-1592137060.jpg', name: 'XYZ', info: 'Education:B.Tech Experience:9 Years' },
  { id: 5, src: 'https://www.shutterstock.com/shutterstock/videos/1026668207/thumb/1.jpg?ip=x480', name: 'XYZ', info: 'Education:M.Tech Experience:6 Years' },
  // Add more instructors with their information
];

const Instructors = () => {
  const [flipped, setFlipped] = useState([]);

  const handleFlip = (id) => {
    if (flipped.includes(id)) {
      setFlipped(flipped.filter((item) => item !== id));
    } else {
      setFlipped([...flipped, id]);
    }
  };

  return (
    <div className="containeri">
      <h1>Instructors</h1>
      <Row>
        {instructors.map((instructor) => (
          <Col key={instructor.id} xs={12} sm={6} md={4} lg={3} className="col">
            <div
              className={`card-container ${flipped.includes(instructor.id) ? 'flipped' : ''}`}
              onClick={() => handleFlip(instructor.id)}
            >
              <div className="cardi">
                <div className="cardi-front">
                  <Card.Img variant="top" src={instructor.src} className="card-img-top" />
                  <Card.Body className="card-bodyi">
                    <Card.Title className="card-titlei">{instructor.name}</Card.Title>
                  </Card.Body>
                </div>
                <div className="cardi-back">
                  <Card.Body className="card-bodyi">
                    <Card.Text>{instructor.info}</Card.Text>
                  </Card.Body>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Instructors;