import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Category = ({course}) => {

    return (
        <div>
    <ListGroup variant="primary" as="ol"  >
      <ListGroup.Item className="fw-bold"><Link to={`/courses/${course.id}`}>{course.course_Name}</Link></ListGroup.Item>
     
    </ListGroup>
        </div>
    );
};

export default Category;