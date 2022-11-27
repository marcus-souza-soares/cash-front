import { useContext } from "react";
import styled from "styled-components";
import { topToBottom } from "../assets/animations";
import { TransactionContext } from "../contexts/transactionContext";
import { OptionButton } from "../components/OptionButton";
import UsePostTransaction from "../hooks/api/usePostTransaction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function Checkout(): JSX.Element {
  const navigate = useNavigate();
  const { accountIn, accountOut, value } = useContext(TransactionContext);
  const { createTransaction } = UsePostTransaction();

  const handleSubmit = async () => {
    try {
      await createTransaction(accountOut, accountIn, value);
      toast("Transação efetudada!");
      navigate("/")
    } catch (error) {
      toast("Não foi possível efetetuar a transação!");
    }
  };

  return (
    <Container>
      <div>
        <div className="cashOut">
          <h2>Enviando de: </h2>
          <h1>{accountOut?.username}</h1>
        </div>
        <span>valor: R${value}</span>
        <div className="cashIn">
          <h2>Para: </h2>
          <h1>{accountIn?.username}</h1>
        </div>
      </div>
      <OptionButton onClick={handleSubmit}>Transferir</OptionButton>
    </Container>
  );
}
const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  width: 1000px;
  min-height: 600px;
  background-color: #0f0f0f;
  background-image: url("../src/assets/images/background.png");
  background-size: contain;
  border-radius: 15px;
  border: 2px solid #fff;
  animation: ${topToBottom} 0.3s;
  color: #fff; 
  position: relative;

  > div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
  }
  span {
    font-size: 22px;
    padding: 8px;
  }

  span,
  .cashIn,
  .cashOut {
    border-radius: 14px;
    background-color: #0f0f0f;
    border: 1px dashed #fff;
  }

  .cashIn,
  .cashOut {
    width: 255px;
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
