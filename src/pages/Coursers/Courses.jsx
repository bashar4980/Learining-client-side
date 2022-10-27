import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courseData = useLoaderData();
   
    return (
      
          <Container fluid>
              <Row>
                <Col lg={3}>
                Course section
                </Col>
                <Col lg={9}>
               <Container>
               <Row className='gy-4'>
                   {
                    courseData.map((course)=> <Course key={course.id} course={course}></Course>)
                   }
                </Row>
               </Container>
                </Col>
            </Row>
          </Container>
 
    );
};

export default Courses;