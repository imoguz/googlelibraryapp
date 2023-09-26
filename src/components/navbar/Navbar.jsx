import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useSearchContext } from "../../context/AuthContext";
import { useThemeContext } from "../../context/ThemeContext";
import { styles } from "./Navbar.style";
import { global } from "../../styles/Global.styles";
function NavBar() {
  const { theme } = useThemeContext();
  const { user, setUser } = useSearchContext();
  return (
    <Navbar expand="md" style={theme ? global.lNavbg : global.dNavbg}>
      <Container>
        <Navbar.Brand
          href="/"
          style={theme ? global.lNavbrand : global.dNavbrand}
        >
          Google Library
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 ">
            <NavLink to="/" style={theme ? global.lNavitem : global.dNavitem}>
              Home
            </NavLink>
            <NavLink
              to="/about"
              style={theme ? global.lNavitem : global.dNavitem}
            >
              About
            </NavLink>
            {!user && (
              <NavLink
                to="register"
                style={theme ? global.lNavitem : global.dNavitem}
              >
                Register
              </NavLink>
            )}
            <NavLink
              to="login"
              style={theme ? global.lNavitem : global.dNavitem}
              onClick={() => setUser()}
            >
              {user ? `Logout` : `Login`}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
