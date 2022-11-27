import { useState } from "react";
import styled from "styled-components";
import { topToBottom } from "../assets/animations";
import useTransactions from "../hooks/api/useTransactions";
import { OptionButton } from "../components/OptionButton";
import { useAuth } from "../hooks/useAuth";
import { TransactionsDiv } from "../components/Checkout/TransactionsHisComponent";

export function TransactionHistory(): JSX.Element {
  const [filter, setFilter] = useState<string>("all");
  const [date, setDate] = useState<string | null>();
  const { user } = useAuth();
  const { transactions, transactionsLoading, getTransactions } =
    useTransactions();

  const handleSubmit = async (): Promise<any> => {
    await getTransactions(user?.accountId, filter, date);
    console.log(transactions);
  };

  console.log(transactions);

  return (
    <Container>
      <div className="filters">
        <input
          type="date"
          id="date"
          name="date"
          onChange={(e) => setDate(e.target.value)}
        />
        <select
          name="history"
          id=""
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="cash-in">Entradas</option>
          <option value="cash-out">Saídas</option>
          <option value="all">Todas</option>
        </select>
      </div>
      <div className="transactions-container">
        {transactions?.map((t, i) => (
          <TransactionsDiv transaction={t} />
        ))}
      </div>
      <div className="buttons">
        <OptionButton onClick={handleSubmit} disabled={transactionsLoading}>
          Pesquisar
        </OptionButton>
        <OptionButton
          disabled={transactionsLoading}
          onClick={() => {
            setDate(null);
            setFilter("all");
          }}
        >
          Limpar campos
        </OptionButton>
      </div>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 1000px;
  height: 600px;
  background-color: #0f0f0f;
  background-image: url("../src/assets/images/background.png");
  background-size: contain;
  border-radius: 15px;
  border: 2px solid #fff;
  animation: ${topToBottom} 0.3s;
  position: relative;

  .transactions-container {
    padding: 35px 0;
    margin: 0 auto;
    overflow: auto;
  }
  .filters {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .buttons {
    display: flex;
    width: 100%;
    gap: 30px;
    justify-content: center;
    position: absolute;
    bottom: 15px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }

  select {
    width: 130px;
  }
`;
