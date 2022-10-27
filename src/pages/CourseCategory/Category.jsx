import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Category = ({course}) => {

    return (
        <div>
    <ListGroup variant="primary" as="ol"  >
      <ListGroup.Item className="fw-bold">{course.course_Name}</ListGroup.Item>
     
    </ListGroup>
        </div>
    );
};

export default Category;