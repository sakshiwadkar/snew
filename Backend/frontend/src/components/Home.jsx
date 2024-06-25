import React from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css';
import Footer from '../pages/Footer';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
const Layout = ({ children }) => {
    return (
        <div className="layout">
            <div className="sidebar-and-content">
                <Sidebar className="sidebar" />
                <div>
        
        <Carousel  className="slide" interval={1000}>
                <Carousel.Item>
                    <img src="https://www.shutterstock.com/image-vector/book-laptop-low-poly-wireframe-260nw-1364090885.jpg" alt="First slide" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                <img src="https://www.shutterstock.com/image-photo/elearning-on-computer-laptop-city-260nw-1187700850.jpg" alt="First slide" className="d-block w-100" />
                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src="https://t3.ftcdn.net/jpg/03/45/29/56/360_F_345295622_gUzV6dU09syTrk49uSabBvhaEDBlJeFp.jpg" alt="First slide" className="d-block w-100" />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
      <div className="quality">
            <h2> Quality of our Coaching Centre</h2>
            <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/years-experience-web-icon-illustration-isolated-white-background-simple-vector-badge-years-experience-web-icon-illustration-160524887.jpg"
        style={{
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => { e.target.style.transform = 'scale(1.1)'; }}
          onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
        />
        <Card.Body>
          <Card.Title><h3>Year of experience</h3></Card.Title>
          <Card.Text>
                  <h1 style={{ animation: 'increaseCounter 2s forwards' }}>10+</h1>
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://cdn0.iconfinder.com/data/icons/kameleon-free-pack/110/Student-3-512.png"
        style={{
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => { e.target.style.transform = 'scale(1.1)'; }}
          onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}/>
        <Card.Body>
          <Card.Title><h3>Total Students</h3></Card.Title>
          <Card.Text>
          <h1 style={{ animation: 'increaseCounter 2s forwards' }}>350+</h1>
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="data:image/png;base64,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"
        style={{
      transition: 'transform 0.3s ease',
    }}
    onMouseEnter={(e) => { e.target.style.transform = 'scale(1.1)'; }}
    onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}/>
        <Card.Body>
          <Card.Title><h3>Expert Teachers</h3></Card.Title>
          <Card.Text>
          <h1 style={{ animation: 'increaseCounter 2s forwards' }}>180+</h1>
          </Card.Text>
        </Card.Body>
        
        
      </Card>
    </CardGroup>
    

    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://static-00.iconduck.com/assets.00/student-icon-256x150-h5dbzzya.png"
        style={{height: '170px', width: '256px', marginLeft:'60px',marginTop:'10px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => { e.target.style.transform = 'scale(1.1)'; }}
          onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}  />
        <Card.Body>
          <Card.Title><h3>Students Got Above 95%</h3></Card.Title>
          <Card.Text>
          <h1 style={{ animation: 'increaseCounter 2s forwards' }}>521+</h1>
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="https://static-00.iconduck.com/assets.00/student-icon-256x150-h5dbzzya.png"   style={{height: '170px', width: '256px', marginLeft:'60px',marginTop:'10px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => { e.target.style.transform = 'scale(1.1)'; }}
          onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }} />
        <Card.Body>
          <Card.Title><h3>Students Got Above 90%</h3></Card.Title>
          <Card.Text>
          <h1 style={{ animation: 'increaseCounter 2s forwards' }}>545+</h1>
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="https://static-00.iconduck.com/assets.00/student-icon-256x150-h5dbzzya.png" style={{height: '170px', width: '256px', marginLeft:'60px',marginTop:'10px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => { e.target.style.transform = 'scale(1.1)'; }}
          onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }} />
        <Card.Body>
          <Card.Title><h3>Students Got Above 80%</h3></Card.Title>
          <Card.Text>
          <h1 style={{ animation: 'increaseCounter 2s forwards' }}>281+</h1>

          </Card.Text>
        </Card.Body>
        
        
      </Card>
    </CardGroup>
    </div>


    <div className="mt-7" style={{ marginLeft: '90px' }}>
      <h1>Study Material Built for Everyone</h1>
      <Row className="mb-4">
        <Col>
          <Card className="custom-card">
            <Card.Img variant="top" src="https://www.rnwmultimedia.edu.in/images/reactjs.jpg" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
              <ul className="card-list">
                  <li><i className="fa-solid fa-bars"></i>  Advanced</li>
                  <li><i className="fa-regular fa-clock"></i> 1 Year</li>
                  <li><i className="fa-solid fa-book-open"></i> Lesson</li>
                </ul>
              </Card.Text>
              <Link to="/Courses">
                <Button variant="primary">Book Now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="custom-card">
            <Card.Img variant="top" src="https://devopsschool.com/assets/assets1/images/courses/java-se-version.png" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
              <ul className="card-list">
                  <li><i className="fa-solid fa-bars"></i>  Advanced</li>
                  <li><i className="fa-regular fa-clock"></i> Lifetime</li>
                  <li><i className="fa-solid fa-book-open"></i> Lesson</li>
                </ul>
              </Card.Text>
              <Link to="/Courses">
                <Button variant="primary">Book Now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="custom-card">
            <Card.Img variant="top" src="https://5.imimg.com/data5/SK/FD/EF/ANDROID-28363567/product-jpeg-500x500.jpeg" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
              <ul className="card-list">
                  <li><i className="fa-solid fa-bars"></i>  Advanced</li>
                  <li><i className="fa-regular fa-clock"></i> 1 Year</li>
                  <li><i className="fa-solid fa-book-open"></i> Lesson</li>
                </ul>
              </Card.Text>
              <Link to="/Courses">
                <Button variant="primary">Book Now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="custom-card">
            <Card.Img variant="top" src="https://media.licdn.com/dms/image/C4D12AQHIXQf1W0x7ew/article-cover_image-shrink_600_2000/0/1626803605227?e=2147483647&v=beta&t=NV6ADlyapbYBdOCTuTyktvRxMUQ6brbpF7P5UeU0EH8" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
              <ul className="card-list">
                  <li><i className="fa-solid fa-bars"></i>  Advanced</li>
                  <li><i className="fa-regular fa-clock"></i> 1 Year</li>
                  <li><i className="fa-solid fa-book-open"></i> Lesson</li>
                </ul>
              </Card.Text>
              <Link to="/Courses">
                <Button variant="primary">Book Now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
    <div className="faculty">
    <h1>Our Faculty Members</h1>
      <Row>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" />
            <Card.Body>
              <Card.Title>XYZ</Card.Title>
              <Card.Text>
                Faculty head
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" />
            <Card.Body>
              <Card.Title>ABC</Card.Title>
              <Card.Text>
                Faculty member
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" />
            <Card.Body>
              <Card.Title>MNO</Card.Title>
              <Card.Text>
                Faculty in-Charge
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    
    </div>
  <div className='feedback'>
      <h1>Parent & family testimonials</h1>
     <div className="d-flex justify-content-around">
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src="data:image/png;base64,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" />
        <Card.Body>
          <Card.Title>XYZ</Card.Title>
          <Card.Text>
          I, as a parent, have only one wish for my child, and that is for her to be kind, compassionate, and empathetic to others. I am eternally grateful for your support in helping her become the best version of herself. Thank you once again for everything you are doing for our family. And I'm glad she has you as a mentor.
          </Card.Text>
       
        </Card.Body>
      </Card>

      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src="data:image/png;base64,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" />
        <Card.Body>
        <Card.Title>XYZ</Card.Title>
          <Card.Text>
          I, as a parent, have only one wish for my child, and that is for her to be kind, compassionate, and empathetic to others. I am eternally grateful for your support in helping her become the best version of herself. Thank you once again for everything you are doing for our family. And I'm glad she has you as a mentor.
          </Card.Text>
          
        </Card.Body>
      </Card>
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src="data:image/png;base64,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" />
        <Card.Body>
        <Card.Title>XYZ</Card.Title>
          <Card.Text>
          I, as a parent, have only one wish for my child, and that is for her to be kind, compassionate, and empathetic to others. I am eternally grateful for your support in helping her become the best version of herself. Thank you once again for everything you are doing for our family. And I'm glad she has you as a mentor.
          </Card.Text>
          
        </Card.Body>
      </Card>
    </div>
    </div>
    
        </div>
       
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
