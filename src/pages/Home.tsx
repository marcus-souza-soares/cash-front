import styled from "styled-components";
import { Painel } from "../components/Main/accountPainel";
import { OptionButton } from "../components/OptionButton";
import { topToBottom } from "../assets/animations";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../hooks/useAuth";

export default function Home(): JSX.Element {
  const navigate = useNavigate();

  const { signOut } = useAuth();
  return (
    <Container>
      <span onClick={() => {
        signOut()
        navigate("/signin")
      }}>
        <FiLogOut />
      </span>
      <Painel />
      <div className="buttons">
        <Link to="/new/value">
          <OptionButton>Pagar</OptionButton>
        </Link>
        <Link to="/history">
          <OptionButton>Histórico</OptionButton>
        </Link>
      </div>
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
  position: relative;

  > span {
    color: #fff;
    position: absolute;
    right: 15px;
    top: 15px;
    &:hover {
      cursor: pointer;
    }
  }
  .buttons {
    display: flex;
    gap: 20px;
  }
`;
