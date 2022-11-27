import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { topToBottom } from "../assets/animations";
import { OptionButton } from "../components/OptionButton";
import { TransactionContext } from "../contexts/transactionContext";
import Input from "../components/Form/Input";
import useSearch from "../hooks/api/useSearch";
import { UserDiv } from "../components/User";
import { useNavigate } from "react-router-dom";
import { alert } from "../Helpers/Alert";

export default function NewTransactionTransfer(): JSX.Element {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");

  const { accountOut, value, accountIn } = useContext(TransactionContext);

  const { searchList, searchLoading, searchUsers } = useSearch();

  useEffect(() => {
    console.log(accountOut);
    console.log(value);
  }, []);

  const handleSubmit = (): void => {
    if (accountIn) {
      navigate("/checkout");
    } else {
      alert({
        type: "error",
        title: "Sorry",
        text: "Você não selecionou ninguém!",
      });
    }
  };

  const handleChange = async (e: any): Promise<void> => {
    setName(e.target.value);
    if (name.length > 3) await searchUsers(name);
    console.log(searchList);
  };
  return (
    <Container>
      <Input
        label="Digite o nome: Ex: Mariana"
        onChange={handleChange}
        value={name}
      />
      <div>
        {searchList?.map((u) => (
          <UserDiv user={u} />
        ))}
      </div>
      <OptionButton disabled={searchLoading} onClick={handleSubmit}>
        Prosseguir
      </OptionButton>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
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
