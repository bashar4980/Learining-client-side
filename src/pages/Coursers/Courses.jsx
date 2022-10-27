import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import Category from '../CourseCategory/Category';

const Courses = () => {
    const courseData = useLoaderData();
   
    return (
      
          <Container fluid>
              <Row>
                <Col lg={3}>
                {
                    courseData.map((course)=> <Category key={course.id} course={course}></Category>)
                   }
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