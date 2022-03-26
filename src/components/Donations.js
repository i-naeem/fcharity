import {
  Button,
  Card,
  Col,
  Container,
  ProgressBar,
  Row,
} from 'react-bootstrap';
import { BaloonImage, KnowledgeImage, ReadingImage } from '../assets';

const cards = [
  {
    id: 1,
    img: BaloonImage,
    raised: 15000,
    total: 30000,
    subtitle: 'Gift an education...make a life !',
  },
  {
    id: 2,
    img: ReadingImage,
    raised: 12000,
    total: 30000,
    subtitle: 'Gift an education...make a life !',
  },
  {
    id: 3,
    img: KnowledgeImage,
    raised: 19000,
    total: 30000,
    subtitle: 'Gift an education...make a life !',
  },
];

const Donations = (props) => {
  return (
    <section className="vh-100" id="donations">
      <Container className="py-5 ">
        <h1 className="display-4 fw-bold text-bold text-center">
          You can help lots of people by <br />
          donating little
        </h1>
        <Container>
          <Row>
            {cards.map((card) => {
              return (
                <Col key={card.id} className="p-5">
                  <Card text="dark" className="shadow shadow-sm">
                    <Card.Img variant="top" src={card.img} />
                    <Card.Body>
                      <section className="p-2">
                        <Card.Title className="text-center fs-5">{`$${card.raised} of $${card.total} raised`}</Card.Title>
                      </section>
                      <section>
                        <ProgressBar
                          variant="warning"
                          now={Math.round((card.raised / card.total) * 100)}
                        />
                      </section>

                      <section className="text-center mt-2 fs-5">
                        <h6>{card.subtitle}</h6>
                      </section>
                    </Card.Body>
                    <Card.Footer className="bg-transparent m-0 border-0 d-flex align-items-center justify-content-center mb-2">
                      <Button size="lg" variant="warning">
                        DONATE
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Donations;
