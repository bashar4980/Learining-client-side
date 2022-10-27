import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FaGoogle , FaGithub} from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../userContext/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";




const SignUp = () => {
const {providerLogin }=useContext(AuthContext)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

//sign in google
const userSignupWithgoogle=()=>{
    providerLogin(googleProvider)
    .then(result=>{
        const user = result.user;
        console.log(user)
    })
    .catch(error=> console.error(error))
}
//sign in google end
//sign in github
const userSignupWithgithub=()=>{
    providerLogin(githubProvider)
    .then(result=>{
        const user = result.user;
        console.log(user)
    })
    .catch(error=> console.error(error))
}
//signin github
  return (
    <div>
      <Container>
        <h3 className="text-center pt-5">Please Registration</h3>
    
        <Row className="py-5">
          <Col lg={6} className="mx-auto">
            <Card className="p-3">
            <div className="signUp d-flex justify-content-center gap-2 fw-bold">
            <Button onClick={userSignupWithgoogle}><FaGoogle /> SignUp with Gmail</Button>
             <Button onClick={userSignupWithgithub}><FaGithub /> SignUp With GitHub</Button>
            </div>
            <Form>

              <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name"placeholder="Enter your name" />
              
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Photo:</Form.Label>
                <Form.Control type="text" name="picture" placeholder="Enter your picture" />
              
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
              
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
              </Form.Group>
            
              <Button variant="primary" type="submit">
                Register
              </Button>
              <p><span>Already have account? <Link to="/loging">Login</Link></span></p>
            </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
