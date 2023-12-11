import { Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='footer-container bg-green p-4 footer'>
      <Nav className='justify-content-center'>
        <Nav.Link href='#'>EcoPasseiosPE</Nav.Link>
        <Nav.Link href='#'>Privacidade</Nav.Link>
        <Nav.Link href='#'>Termos</Nav.Link>
        <Nav.Link href='#'>Informações da empresa</Nav.Link>
      </Nav>
    </div>
  );
};

export default Footer;