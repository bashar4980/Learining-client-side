import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import './Details.css';
import Pdf  from "react-to-pdf";
import { createRef } from 'react';
const ref =createRef()

function CourseDetails() {
    const course = useLoaderData();
    const {id ,img, course_Name , level , price, author, content}=course;
  return (
    <Container>
      <h3 className='text-center'>Learn About {course_Name}</h3>
        <Card className="mt-5" ref={ref}>
      <Card.Header>{course_Name}</Card.Header>
      <Card.Img variant="top" className="w-100 h-100" src={img} />
      <Card.Body>
        <Card.Title>{course_Name}</Card.Title>
        <Card.Title>Price: {price}</Card.Title>
        <Card.Title>Level: {level}</Card.Title>
        <Card.Title>Author: {author}</Card.Title>
        
      


    
        <Card.Text className="card_text pt-5">
          {content}
        </Card.Text>
        <div className=''>
        <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <Button className='btn detailsButton' onClick={toPdf}>Download</Button>}
      </Pdf>
        <Button variant="primary" className='btn detailsButton'><Link className="text-light" to={`/checkout/${id}`}>Get Premium access</Link></Button>
        </div>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default CourseDetails;