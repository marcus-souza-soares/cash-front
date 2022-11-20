import MuiButton from "@mui/material/Button";
import styled from "styled-components";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  children: React.ReactNode;
  variant?: "contained" | "text" | "outlined" | undefined;
  type: "submit" | "button" | "reset" | undefined;
}

export default function Button({
  children,
  loading,
  onClick = () => 0,
  variant="contained",
  type="submit"
}: Props) {
  return (
    <StyledMuiButton disabled={loading} onClick={onClick} variant={variant} type={type}>
      {children}
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled(MuiButton)`
  margin-top: 8px !important;
`;
