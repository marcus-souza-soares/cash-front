import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { topToBottom } from "../assets/animations";
import { OptionButton } from "../components/OptionButton";
import { TransactionContext } from "../contexts/transactionContext";
import { alert } from "../Helpers/Alert";
export default function NewTransactionTransfer(): JSX.Element {

  useEffect(() => {
    console.log(accountOut);
    console.log(value);
  }, []);

  const { accountOut, value } = useContext(TransactionContext);

  const handleSubmit = (): void => {};

  return (
    <Container>
      <OptionButton onClick={handleSubmit}>Prosseguir</OptionButton>
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
  background-color: #0f0f0f;
  background-image: url("../src/assets/images/background.png");
  background-size: contain;
  border-radius: 15px;
  border: 2px solid #fff;
  animation: ${topToBottom} 0.3s;

  input {
    border-radius: 5px;
    background-color: #f0f0f0;
  }
`;
