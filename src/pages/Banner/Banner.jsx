import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Container className="py-5">
        <Row className="align-items-center">
          <Col className="banner_text">
            {/* Bannner content */}
            <h1>Learn without limits</h1>
            <p>
              Learn Tech is an e-learning academy.Start, switch, or advance your
              career with more than 5 courses, Professional Certificates, and
              degrees from world-class universities and companies.
            </p>
            <Button className="button">Join Now</Button>
          </Col>

          <Col>
            <img
              className="w-100 d-block"
              src="https://img.freepik.com/free-vector/female-student-listening-webinar-online_74855-6461.jpg"
              alt="bannerImg"
            ></img>
          </Col>
        </Row>
      </Container>
      <div className="mt-5 text-center mb-0 pt-5 bg-light">
  
        <p>Copyright ©2022 All rights reserved</p>
      </div>
    </>
  );
};

export default Banner;
