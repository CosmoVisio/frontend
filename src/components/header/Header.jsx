import { Navbar, Nav } from "react-bootstrap";
import BottonPrimary from "../Button/ButtonPrimary";
import Link from "next/link";
import Logo from "../../assets/EcoPasseiosPElogo.png";

const Header = () => {
  return (
    <div className="header-container container bg-white d-flex pt-2">
      <Link href="/">
        <Navbar.Brand className="d-none d-lg-flex pt-2">
          <img src={Logo.src} alt="Seu Logo" height="80" />
        </Navbar.Brand>
      </Link>

      <div className="menu-container">
        <Navbar className="mr-4" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link
                className="text-decoration-none text-uppercase"
                href="/"
                passHref
              >
                <Nav.Link>Inicio</Nav.Link>
              </Link>
              <Link
                className="text-decoration-none text-uppercase"
                href="/places"
                passHref
              >
                <Nav.Link>Destinos</Nav.Link>
              </Link>
              <Link
                className="text-decoration-none text-uppercase"
                href="/services"
                passHref
              >
                <Nav.Link>Pacotes</Nav.Link>
              </Link>
             
              <Link
                className="text-decoration-none text-uppercase"
                href="/contact"
                passHref
              >
                <Nav.Link>Contato</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div>
        <Nav className="ml-auto">
          <BottonPrimary variant="outline-primary">Login</BottonPrimary>
          <BottonPrimary variant="primary">Signup</BottonPrimary>
        </Nav>
      </div>
    </div>
  );
};

export default Header;
