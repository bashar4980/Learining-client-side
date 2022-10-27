import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";

const Checkout = () => {
  const course = useLoaderData();
  const { id, img, course_Name, level, price, author, content } = course;
  return (
    <div>
      <h3 className="text-center py-3">Please Checkout your Course</h3>
      <Container>
        <Row>
          <Col lg={3} className="mx-auto">
            <Card className="p-3">
              <Card.Title>{course_Name}</Card.Title>
              <Card.Title>Price: {price}</Card.Title>
              <button className="btn btn-primary">Check Out</button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
