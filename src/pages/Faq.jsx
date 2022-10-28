import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div>
          <div className="text-center mt-5">
          <h2>Frequently Asked Question</h2>
            <h4>You Right to Know</h4>
          </div>
          <Container className="py-5">
            <Row>
                <Col>
                <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Who is the target Student for this course?</Accordion.Header>
        <Accordion.Body>
        Who wants to become a web developer. For those who want to learn web development from scratch and then get a job in a software company as a web developer. For those who don't know much about programming or web development. Even those who have studied CSE for four years and could not decide what to do, did not learn much, they can learn complete web development from this course and apply for jobs.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How much time need to finish?</Accordion.Header>
        <Accordion.Body>
          3-6 Month Need
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Are you provide the certificate?</Accordion.Header>
        <Accordion.Body>
          Yes,We Can Provide Certificate
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Support time?</Accordion.Header>
        <Accordion.Body>
          24/7 Days
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </Col>
            </Row>
          </Container>
        </div>
    );
};

export default Faq;