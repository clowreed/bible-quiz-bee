import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../css/common.css";

function Welcome() {
  return (
    <Container className="full-height">
      <div className="welcome">
        <div className="main-container">
          <div className="text-center">
            <h1 className="main-title">Bible Adventures</h1>
          </div>
          <div>
            <Container fluid>
              <Row>
                <Col
                  className="d-flex justify-content-center mb-2"
                  md={6}
                  xs={12}
                >
                  <Button variant="info">Connect Wallet</Button>
                </Col>
                <Col
                  className="d-flex justify-content-center mb-2"
                  md={6}
                  xs={12}
                >
                  <Button
                    variant="secondary justify-content-center align-content-center"
                    onClick={() => {
                      alert("hello");
                    }}
                  >
                    Login as Guest
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Welcome;
