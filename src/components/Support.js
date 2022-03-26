import { Card, Col, Container, Row } from 'react-bootstrap';
import { BecomeMemberImg, GiveLoveImg, SavePlanetImg } from '../assets';

const cards = [
  {
    id: 1,
    img: GiveLoveImg,
    title: 'Give Love',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
  },
  {
    id: 2,
    img: SavePlanetImg,
    title: 'Save Planet',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
  },
  {
    id: 3,
    img: BecomeMemberImg,
    title: 'Become Memeber',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
  },
];

const Support = (props) => {
  return (
    <section
      id="support"
      className="vh-100 d-flex align-items-center justify-content-center"
    >
      <Container>
        <section className="text-center d-flex align-items-center justify-content-center mb-5">
          <div style={{ maxWidth: '1000px' }}>
            <h1 className="display-1 fw-bold">How you can support us</h1>
            <p className="fs-3">
              Sterling non-profit organisation that collaborates with volunteers
              to deliver humanitarian aid and disaster relief to vulnerable
              communities.
            </p>
          </div>
        </section>

        <section>
          <Container>
            <Row sm={1} md={3}>
              {cards.map((card) => {
                return (
                  <Col key={card.id}>
                    <Card className="p-3 border-0">
                      <div className="d-flex align-items-center justify-content-center">
                        <Card.Img
                          src={card.img}
                          alt={card.title}
                          style={{ maxWidth: '128px' }}
                        />
                      </div>

                      <Card.Body className="text-center">
                        <Card.Title className="fs-3">{card.title}</Card.Title>
                        <p className="fs-5 ">{card.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      </Container>
    </section>
  );
};

export default Support;
