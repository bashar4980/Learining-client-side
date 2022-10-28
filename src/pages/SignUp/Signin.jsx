import React, { useContext } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../userContext/AuthProvider";





const Signin = () => {
const {signIn , providerLogin}=useContext(AuthContext);
const [error , setError] = useState(null) ;
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const location = useLocation();
const navigate = useNavigate()
const from = location.state?.from?.pathname || '/';

const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email,password)
    .then((result)=>{
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, {replace: true})

    })
    .catch(error=>{
      setError(error.message)
      })

   
    
}
//sign in google
const userSignupWithgoogle=()=>{
  providerLogin(googleProvider)
  .then(result=>{
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true})
  })
  .catch(error=> console.error(error))
}
//sign in google end
//sign in github
const userSignupWithgithub=()=>{
  providerLogin(githubProvider)
  .then(result=>{
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true})
  })
  .catch(error=> console.error(error))
}
//signin github
//signin github
  return (
    <div>
      <Container>
        <h3 className="text-center pt-5">Please Login</h3>
    
        <Row className="py-5">
          <Col lg={6} className="mx-auto">
            <Card className="p-3">
            <div className="signUp d-flex justify-content-center gap-2 fw-bold">
            <Button onClick={userSignupWithgoogle}><FaGoogle /> Signin with Gmail</Button>
             <Button onClick={userSignupWithgithub}><FaGithub /> Signin With GitHub</Button>
            </div>
            
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
                Login
            </Button>
            {
              <p className="text-danger">{error}</p>
            }
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
