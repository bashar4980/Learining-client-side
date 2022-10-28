import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Course({course}) {
    const {id,img, course_Name , level , price, author}=course;
  return (
    <Col lg={4} md={6}>
    <Card>
      <Card.Img variant="top" className="w-100 h-100" src={img} />
      <Card.Body>
        <Card.Title>{course_Name}</Card.Title>
        <Card.Title>Price: {price}</Card.Title>
        <Card.Text>
        <p>Level:{level}</p>
        </Card.Text>
        <Card.Text>
        <p className="text-muted">Author: {author}</p>
        </Card.Text>
        
        <Button variant="primary"><Link className="text-light" to={`/courses/${id}`}>Go Details</Link></Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default Course;