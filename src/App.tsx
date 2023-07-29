import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Stack,
  FormText,
} from "react-bootstrap";
import "./App.css";
import { useStore } from "./hooks/useStore";
import { AUTO_LANGUAGE } from "./constant";
import { ArrowsIcon } from "./components/icons";
import { LanguageSelector } from "./components/LanguagesSelector";
import { SectionType } from "./types.d";
import { TextArea } from "./components/TextArea";

function App() {
  const {
    loading,
    fromLanguage,
    toLanguage,
    fromText,
    result,
    interchangeLanguages,
    setFromLanguage,
    settoLanguage,
    setFromText,
    setResult,
  } = useStore();

  return (
    <Container fluid>
      <h2>Google Translate</h2>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>
        <Col xs="auto">
          <Button
            variant="link"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={settoLanguage}
            />
            <TextArea
              loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setResult}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
