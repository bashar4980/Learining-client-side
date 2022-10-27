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
const {providerLogin , createUser}=useContext(AuthContext)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;


    createUser(email,password)
    .then((result)=>{
        const user=result.user;
        console.log(user);
        form.reset()
    })
    .catch(error=>{
        console.error(error.message)
    })
    
}
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
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
            </Form.Group>

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

            
           
        </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
