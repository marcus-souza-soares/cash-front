import { useContext, useEffect } from "react";
import styled from "styled-components";
import { useAuth } from "../../hooks/useAuth";
import useAccount from "../../hooks/api/useAccount";
import { AccountContext } from "../../contexts/accountContext";

export function Painel(): JSX.Element {
  const { user } = useAuth();
  const { accountData, getAccount } = useAccount();
  const { setAccount } = useContext(AccountContext);

  useEffect(() => {
    user && getAccount(user?.accountId);
  }, [user]);

  setAccount(accountData);
  return (
    <Container>
      <h1>Seu saldo é: </h1>
      <br />
      <h1>{`R$ ${accountData?.balance}`}</h1>
    </Container>
  );
}
const Container = styled.div`
  border: 1px black dashed;
  width: 250px;
  height: 170px;
  border-radius: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.7);

  h1 {
    margin: 0 auto;
    font-size: 26px;
  }
`;
