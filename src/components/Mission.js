import { Card, CardGroup, Col, Container, Image, Row } from 'react-bootstrap';
import { RunningImage } from '../assets';
const Mission = (props) => {
  return (
    <section
      id="missions"
      className="vh-100 d-flex align-items-center justify-content-center"
    >
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={8}>
            <section>
              <h1 className="display-4">
                We're on a mission of big changes. To help people and the world.
              </h1>
              <p className="fs-5">
                We’re focused on providing affordable volunteer travel
                experiences that are responsible. Our programs heighten global
                awareness and cultural understanding through the skills and
                expertise taken by volunteers to their host communities.
              </p>
            </section>
            <section>
              <CardGroup>
                <Card>
                  <Card.Body>
                    <Card.Title className="display-5 fw-bold">$50K</Card.Title>
                    <Card.Subtitle className="fs-4 text-muted ">
                      Raised
                    </Card.Subtitle>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Body>
                    <Card.Title className="display-5 fw-bold">300+</Card.Title>
                    <Card.Subtitle className="fs-4 text-muted ">
                      Volunteers
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title className="display-5 fw-bold">48+</Card.Title>
                    <Card.Subtitle className="fs-4 text-muted ">
                      Countries
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </CardGroup>
            </section>
          </Col>
          <Col sm={4}>
            <Image src={RunningImage} alt="Running Kid" fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Mission;
