import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { topToBottom } from "../assets/animations";
import Input from "../components/Form/Input";
import { OptionButton } from "../components/OptionButton";
import { AccountContext } from "../contexts/accountContext";
import { TransactionContext } from "../contexts/transactionContext";
import { alert } from "../Helpers/Alert";

export default function NewTransactionValue(): JSX.Element {
  const navigate = useNavigate();
  const [_value, _setValue] = useState<string | null>(null);
  const { account } = useContext(AccountContext);
  const {
    setAccountOut,
    setValue,
  } = useContext(TransactionContext);

  const handleSubmit = (): void => {
    if (account?.balance) {
      if (Number(_value) > account.balance) {
        alert({
          type: "error",
          title: "Saldo insuficiente",
          text: `Seu saldo é ${account.balance}`,
        });
      } else {
        setValue(_value);
        setAccountOut(account);
        navigate("/new/transfer")
      }
    }
  };
  return (
    <Container>
      <Input
        label="Digite o valor:"
        onChange={(e) => _setValue(e.target.value)}
      />
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
