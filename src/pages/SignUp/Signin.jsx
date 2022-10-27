import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import { AuthContext } from "../../userContext/AuthProvider";





const Signin = () => {
const {signIn}=useContext(AuthContext)

const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email,password)
    .then((result)=>{
        const user = result.user;
        console.log(user);
        form.reset()

    })
    .catch(error=>console.error(error.message))

   
    
}

//signin github
  return (
    <div>
      <Container>
        <h3 className="text-center pt-5">Please Login</h3>
    
        <Row className="py-5">
          <Col lg={6} className="mx-auto">
            <Card className="p-3">
            
            <Form onSubmit={handleSubmit}>
            

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            
            <Button variant="primary" type="submit" >
                Register
            </Button>
            <p>You don't account?<Link to="/signup">Register</Link></p>

            
           
        </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signin;
