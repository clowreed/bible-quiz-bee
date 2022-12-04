import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../css/common.css";

function Welcome() {
  return (
    <Container className="show-border">
      <Row>
        <Col>
          <h1>Bible Quiz Bee App!</h1>
          <Button variant="primary">Start</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
