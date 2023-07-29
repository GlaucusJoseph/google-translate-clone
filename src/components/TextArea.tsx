import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";

interface Props {
  type: SectionType;
  loading?: boolean;
  onChange: (value: String) => void;
  value: string;
}

const commonStyles = { boder: 0, height: "200px", resize: "none" };

export const TextArea = ({ type, loading, value, onChange }: Props) => {
  const getPlacegolder = ({
    type,
    loading,
  }: {
    type: SectionType;
    loading?: boolean;
  }) => {
    if (type === SectionType.From) return "Introducir texto...";
    if (loading === true) return "Cargando...";
    return "Traduccion";
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  const styles =
    type === SectionType.From
      ? commonStyles
      : { ...commonStyles, backgroundColor: "#f5f5f5" };

  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as="textarea"
      placeholder={getPlacegolder({ type, loading })}
      disabled={type === SectionType.To}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  );
};
