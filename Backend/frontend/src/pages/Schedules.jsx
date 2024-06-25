import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Schedules.css';

const courses = [
  { title: 'Python Course', date: 'Weekend 06:00 PM', time: 'Weekend Offline', branch: 'Bengaluru - Old Airport Road', trainer: 'Ms Nirmala' },
  { title: 'JavaScript Course', date: 'Weekday 10:00 AM', time: 'Weekday Online', branch: 'Mumbai - Andheri', trainer: 'Mr Rajesh' },
  { title: 'Java Course', date: 'Weekend 02:00 PM', time: 'Weekend Offline', branch: 'Delhi - Connaught Place', trainer: 'Ms Anjali' },
  { title: 'C++ Course', date: 'Weekday 04:00 PM', time: 'Weekday Online', branch: 'Chennai - T Nagar', trainer: 'Mr Arjun' },
  { title: 'React Course', date: 'Weekend 12:00 PM', time: 'Weekend Offline', branch: 'Pune - Koregaon Park', trainer: 'Ms Pooja' },
  { title: 'Angular Course', date: 'Weekday 08:00 PM', time: 'Weekday Online', branch: 'Hyderabad - Hitech City', trainer: 'Mr Vikram' },
  
];

function Schedules() {
  return (
    <div className="card-containerr">
      {courses.map((course, index) => (
        <Card className='card1' key={index} style={{ width: '18rem' }}>
          <Card.Header>{course.title}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item><i className="fas fa-book"></i> Course: {course.title}</ListGroup.Item>
            <ListGroup.Item><i className="fas fa-calendar"></i> Date: {course.date}</ListGroup.Item>
            <ListGroup.Item><i className="fas fa-clock"></i> Time: {course.time}</ListGroup.Item>
            <ListGroup.Item><i className="fas fa-map-marker-alt"></i> Branch: {course.branch}</ListGroup.Item>
            <ListGroup.Item><i className="fas fa-chalkboard-teacher"></i> Trainer: {course.trainer}</ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </div>
  );
}

export default Schedules;
