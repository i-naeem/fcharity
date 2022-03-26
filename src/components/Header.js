import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { LogoSVG } from '../assets';

const Header = (props) => {
  return (
    <header>
      <Navbar variant="dark" bg="danger">
        <Container>
          <Navbar.Brand href="#">
            <LogoSVG height={38} width={38} />
          </Navbar.Brand>

          <Nav>
            <Nav.Item>
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Mission</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Contact</Nav.Link>
            </Nav.Item>
          </Nav>

          <Button size="lg" variant="warning">
            DONATE
          </Button>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
