import styled from "styled-components";
import { Painel } from "../components/Main/accountPainel";
import { OptionButton } from "../components/OptionButton";
import { topToBottom } from "../assets/animations";
import { Link } from "react-router-dom";

export default function Home(): JSX.Element {
  return (
    <Container>
      <Painel />
      <Link to="/new/value">
        <OptionButton>Pagar</OptionButton>
      </Link>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1000px;
  min-height: 600px;
  background-image: url("../src/assets/images/background.png");
  background-size: contain;
  border-radius: 15px;
  border: 2px solid #fff;
  animation: ${topToBottom} 0.3s;
`;
