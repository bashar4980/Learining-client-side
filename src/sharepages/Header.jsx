import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink , Link } from 'react-router-dom';
import { AuthContext } from '../userContext/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { Image , Button } from 'react-bootstrap';



function Header() {
  const {user , logOut} = useContext(AuthContext)


  const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(error => console.error(error))
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand>
          
          Learn Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/signup">Register</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            
            <Nav.Link href="#pricing">Blog</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              
            {user?.photoURL &&
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle 
                                    src={user?.photoURL} title={user.displayName}> 
                                  </Image>
                                
                            }
              
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             {
              user?.uid ?  <>
               {
                !user?.photoURL && <FaUser></FaUser>
               }
               <Button variant="light" onClick={handleLogOut}>Log out</Button>
              
              </>
                          : <>
                           <Button variant="light"><Link to="/signin">Login</Link></Button>
                           <Button variant="light"><Link to="/signup">SignUp</Link></Button>
                          </>
             }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;