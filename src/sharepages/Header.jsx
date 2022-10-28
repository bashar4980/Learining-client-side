import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../userContext/AuthProvider";
import { FaUser } from "react-icons/fa";
import { Image, Button } from "react-bootstrap";

function Header() {
  const { user, logOut } = useContext(AuthContext);

  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state variable
    setIsActive((current) => !current);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand><Link to="/">Learn Tech</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className="mx-2 text-dark fw-bold" to="/courses">
              Courses
            </NavLink>

            <NavLink className="mx-2 text-dark fw-bold" to="/blog">
              Blog
            </NavLink>
            <NavLink className="mx-2 text-dark fw-bold" to="/faq">
              Faq
            </NavLink>
          </Nav>
          <Nav >
            <Nav.Link title={user?.displayName}>
              {user?.photoURL && (
                <Image
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoUR}
                ></Image>
              )}
            </Nav.Link>
            <Nav.Link eventKey={2}>
              {user?.uid ? (
                <>
                 {
                  user?.photoURL ? <Image
                  
                  style={{ height: "30px" }}
                  roundedCircle
                  title={user?.displayName}
                  src={user?.photoURL}
                ></Image>
                : <FaUser title={user?.displayName}/>
                 }

                  <Button variant="light" onClick={handleLogOut}>
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="light">
                    <Link className="text-dark fw-bold" to="/signin">
                      Login
                    </Link>
                  </Button>
                  <Button variant="light">
                    <Link className="text-dark fw-bold" to="/signup">
                      SignUp
                    </Link>
                  </Button>
                </>
              )}
            </Nav.Link>
            <Nav.Link>
              <Button onClick={handleClick}>
                {isActive ? "Light" : "Dark"}
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
