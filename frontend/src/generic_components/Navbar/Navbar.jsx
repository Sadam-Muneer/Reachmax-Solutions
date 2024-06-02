import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import gameDistrictLogo from "../../assets/imgs/Home_images/logo.jpg";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="thididnavbar bg-dark py-1 fixed-top">
        <div className="container">
          <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            expanded={expanded}
            className="justify-content-between"
          >
            <Navbar.Brand as={Link} to="/">
              <img
                src={gameDistrictLogo}
                alt="Game District Logo"
                className="logo"
                style={{ width: "100%", height: "auto" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(!expanded)}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/"
                    className="nav-link"
                    onClick={() => setExpanded(false)}
                  >
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/aboutus"
                    className="nav-link"
                    onClick={() => setExpanded(false)}
                  >
                    About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/solutions"
                    className="nav-link"
                    onClick={() => setExpanded(false)}
                  >
                    Solutions
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/publishing"
                    className="nav-link"
                    onClick={() => setExpanded(false)}
                  >
                    Publishing
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/whygames"
                    className="nav-link"
                    onClick={() => setExpanded(false)}
                  >
                    Why Games
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/careers"
                    className="nav-link"
                    onClick={() => setExpanded(false)}
                  >
                    Careers
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/contact"
                    className="nav-link"
                    onClick={() => setExpanded(false)}
                  >
                    Contact
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Header;
