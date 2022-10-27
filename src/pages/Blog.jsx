import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={6}>
            <Card>
              <Card.Title>What Is CORS?</Card.Title>
              <Card.Text>
                Cross-origin resource sharing (CORS) is a browser mechanism
                which enables controlled access to resources located outside of
                a given domain. It extends and adds flexibility to the
                same-origin policy (SOP). However, it also provides potential
                for cross-domain attacks, if a website's CORS policy is poorly
                configured and implemented. CORS is not a protection against
                cross-origin attacks such as cross-site request forgery (CSRF).
              </Card.Text>
            </Card>
          </Col>
          <Col lg={6}>
          <Card>
              <Card.Title>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
              <Card.Text>
                Firebase Use for Hosting and Authentication Purspose.It is third party app for give authentication in our Website.Apart From Firebase we have other options like Oauth,Octa,Aws
              </Card.Text>
            </Card>
          </Col>

          <Col lg={6}>
          <Card>
              <Card.Title>How does the Private Routes Word?</Card.Title>
              <Card.Text>
              The private route component is used to protect selected pages in a React app from unauthenticated users.
              It works some importants condintion as like user is loging or not. If the user is loging then user can access the desire page. and if user not log in then it redirect the log in page
              </Card.Text>
            </Card>
          </Col>
          <Col lg={6}>
          <Card>
              <Card.Title>What is Node? How does Node work??</Card.Title>
              <Card.Text>
              Node is a Javascript Runtime it is used to Run Javascript in server ,for a long time Javascript was used in the server side but a creative programmer decided to use it use it on the server side he took the the V8 engine of chrome and added some C++ code and boom it is the new Node js it is consist of call stack,queue,memory,Event loop ,Thread pool event loop is a very complicated thing call stack takes the code and runs it immedietely then it calls the queue if any code is incomplete to run the event is resposible to call the fisrt one from queue to call stack
              </Card.Text>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Blog;
