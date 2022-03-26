import { Col, Container, Row, Button, Image } from 'react-bootstrap';
import ChildSvg from '../assets/images/child.png';

const Banner = (props) => {
  return (
    <Container as="section" id="home" fluid {...props}>
      <Row
        className="d-flex align-items-center justfy-content-center flex-wrap"
        style={{ height: '93.4vh' }}
      >
        <Col className="d-flex justify-content-center">
          <Image
            src={ChildSvg}
            alt="children"
            fluid
            style={{ maxWidth: '65%' }}
          />
        </Col>
        <Col>
          <section style={{ maxWidth: '500px' }} className="w-100">
            <h1 className="display-4 fw-bold lh-2">
              Help the children. Make big changes and help the world
            </h1>
            <p className="fs-5">
              Sterling non-profit organisation that collaborates with volunteers
              to deliver humanitarian aid and disaster relief to vulnerable
              communities.
            </p>
          </section>
          <section>
            <Button size="lg" variant="warning" className="mx-2">
              DONOTE NOW
            </Button>
            <Button size="lg" variant="outline-secondary" className="mx-2">
              Learn More.
            </Button>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
