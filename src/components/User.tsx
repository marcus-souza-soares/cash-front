import { toast } from "react-toastify";
import styled from "styled-components";
import { useContext } from "react";
import { TransactionContext } from "../contexts/transactionContext";

export function UserDiv({ user }: { user: any }): JSX.Element {
  const { setAccountIn } = useContext(TransactionContext);

  return (
    <Container
      onClick={() => {
        toast(`Selecionado ${user.username}`);
        setAccountIn(user);
      }}
    >
      <h1>{user.username}</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0c0c0d;
  color: #fff;
  overflow-y: hidden;
  flex-wrap: nowrap;

  &:hover {
    filter: brightness(1.8);
    cursor: pointer;
  }
`;
