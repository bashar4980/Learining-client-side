import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import './Details.css'

function CourseDetails() {
    const course = useLoaderData();
    const {img, course_Name , level , price, author, content}=course;
  return (
    <Container>
      <h3 className='text-center'>Learn About {course_Name}</h3>
        <Card className="mt-5">
      <Card.Header>{course_Name}</Card.Header>
      <Card.Img variant="top" className="w-100 h-100" src={img} />
      <Card.Body>
        <Card.Title>{course_Name}</Card.Title>
        <Card.Title>Price: {price}</Card.Title>
        <Card.Title>Level: {level}</Card.Title>
        <Card.Title>Author: {author}</Card.Title>
        
        <div className=''>
        <Button variant="primary" className="detailsButton">Download</Button>
        <Button variant="primary" className='detailsButton'>Get Premium access</Button>
        </div>


    
        <Card.Text className="card_text pt-5">
          {content}
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default CourseDetails;