import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './gallery.css';

export default function Gallery() {
    const students = [
        { name: "James Jar", university: "Shivaji University", img: "https://www.shutterstock.com/image-photo/passport-photo-portrait-asian-smiling-260nw-1041841363.jpg" },
        { name: "Rocky Roy", university: "ABC University", img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/9-1.jpg" },
        { name: "Mayra Roy", university: "MNO University", img: "https://www.shutterstock.com/image-photo/passport-photo-portrait-asian-smiling-260nw-1041841363.jpg" },
        { name: "Smith Patel ", university: "Shivaji University", img: "https://www.shutterstock.com/image-photo/close-head-shot-confident-serious-260nw-1481322794.jpg" },
       
        
        // Add more students as needed
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredStudents, setFilteredStudents] = useState(students);

    const handleSearchChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
        const filtered = students.filter(student =>
            student.name.toLowerCase().includes(value) ||
            student.university.toLowerCase().includes(value)
        );
        setFilteredStudents(filtered);
    };

    return (
        <div className='gallery'>
            
            <div>
                <h1>Our Successful Students</h1>
                <input
                    type="text"
                    placeholder="Search by name or university"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="form-control mb-4"
                />
                <Row>
                    {filteredStudents.map((student, index) => (
                        <Col key={index} md={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={student.img} />
                                <Card.Body>
                                    <Card.Title>{student.name}</Card.Title>
                                    <Card.Text>
                                        {student.university}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
