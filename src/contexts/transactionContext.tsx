import React, { createContext, useState } from "react";
import { AccountData } from "../models/accountModel";

interface Props {
  children: React.ReactNode;
}

interface TransactionContextData {
  accountIn: AccountData | null;
  setAccountIn: any;
  accountOut: AccountData | null;
  setAccountOut: any;
  value: number;
  setValue: any;
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export const TransactionProvider = ({ children }: Props): JSX.Element => {
  const [value, setValue] = useState<number>(0);
  const [accountIn, setAccountIn] = useState<AccountData>({
    id: 0,
    balance: 0,
  });
  const [accountOut, setAccountOut] = useState<AccountData>({
    id: 0,
    balance: 0,
  });

  return (
    <TransactionContext.Provider
      value={{
        accountIn,
        accountOut,
        setAccountIn,
        setAccountOut,
        value,
        setValue,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
