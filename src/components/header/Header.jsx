import { Navbar, Nav } from "react-bootstrap";
import BottonPrimary from "../Button/ButtonPrimary";
import Link from "next/link";
import Logo from "../../assets/EcoPasseiosPElogo.png";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const handleClick = (route) => {
    router.push(route);
  };

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

          <Nav className="mr-auto">
            <Nav.Link className="text-decoration-none text-uppercase" href="/">
              Inicio
            </Nav.Link>

            <Nav.Link
              className="text-decoration-none text-uppercase"
              href="/places"
            >
              Destinos
            </Nav.Link>

            <Nav.Link
              className="text-decoration-none text-uppercase"
              href="/services"
            >
              Pacotes
            </Nav.Link>

            <Nav.Link
              className="text-decoration-none text-uppercase"
              href="/contact"
            >
              Contato
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>

      <div>
        <Nav className="ml-auto">
          <BottonPrimary
            variant="outline-primary"
            onClick={() => handleClick("/login")}
          >
            Login
          </BottonPrimary>
          <BottonPrimary
            variant="primary"
            onClick={() => handleClick("/register")}
          >
            Signup
          </BottonPrimary>
        </Nav>
      </div>
    </div>
  );
};

export default Header;
