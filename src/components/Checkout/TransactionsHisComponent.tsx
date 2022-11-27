import styled from "styled-components";
import dayjs from "dayjs";

export function TransactionsDiv({
  transaction,
}: {
  transaction: any;
}): JSX.Element {
  const { id, value, createdAt, credited, debited } = transaction;
  return (
    <Container>
      <h1>{`Valor de: R$ ${value} no dia ${dayjs(createdAt).format(
        "DD-MM-YY"
      )}`}</h1>
      <h2>{`de: ${debited?.user.username}`}</h2>
      <h2>{`para: ${credited?.user.username}`}</h2>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  width: 375px;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: #0c0c0d;
  color: #fff;
  overflow-y: hidden;
  flex-wrap: nowrap;

  h1 {
    margin-bottom: 10px;
  }

  &:hover {
    filter: brightness(1.8);
    cursor: pointer;
  }
`;
