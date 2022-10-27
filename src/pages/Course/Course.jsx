import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Course({course}) {
    const {img, course_Name , level , price, author}=course;
  return (
    <Col lg={4}>
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{course_Name}</Card.Title>
        <Card.Text>
         {author}
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default Course;