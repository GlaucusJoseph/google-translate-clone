import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { useStore } from "./hooks/useStore";

function App() {
  const { fromLenguage, toLenguage, interchangeLenguages, setFromLenguage } =
    useStore();

  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <h2>From</h2>
          {fromLenguage}
        </Col>
        <Col>
          <button onClick={interchangeLenguages}>Interchange</button>
        </Col>
        <Col>
          <h2>To</h2>
          {toLenguage}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
