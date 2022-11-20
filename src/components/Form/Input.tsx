import TextField from "@mui/material/TextField";
import styled from "styled-components";

interface Props {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  loading?: boolean;
  label?: string;
  value?: string;
  error?: boolean;
  helperText?: string;
}

export default function Input({
  loading = false,
  onChange = () => 0,
  type = "text",
  label = "",
  error = false,
  helperText = ""
}: Props): JSX.Element {
  return (
    <StyledTextField
      label={label}
      type={type}
      disabled={loading}
      onChange={onChange}
      error={error}
      helperText={helperText}
      required
    />
  );
}

const StyledTextField = styled(TextField)`
  margin-top: 8px !important;
`;
