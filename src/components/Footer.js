import { Col, Container, Row } from 'react-bootstrap';

const Footer = (props) => {
  return (
    <Container fluid className="bg-dark text-white">
      <footer className="text-center">
        <Container>
          <section>
            <Row className="text-center d-flex justify-content-center pt-5">
              <FooterLink to="#home" label="Home" />
              <FooterLink to="#about" label="About" />
              <FooterLink to="#mission" label="Mission" />
              <FooterLink to="#contact" label="Contact" />
            </Row>
          </section>

          <hr className="my-4" />

          <section className="mb-2">
            <Row className="d-flex justify-content-center">
              <Col lg={8}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  distinctio earum repellat quaerat voluptatibus placeat nam,
                  commodi optio pariatur est quia magnam eum harum corrupti
                  dicta, aliquam sequi voluptate quas.
                </p>
              </Col>
            </Row>
          </section>
        </Container>

        <div className="text-center p-1">
          © 2022 Copyright: <a href="https://github.com/i-naeem">@i-naeem</a>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;

const FooterLink = ({ to = '/#', label }) => {
  return (
    <Col md={2}>
      <h6 className="text-uppercase font-weight-bold ">
        <a href={to} className="nav-link">
          {label}
        </a>
      </h6>
    </Col>
  );
};
