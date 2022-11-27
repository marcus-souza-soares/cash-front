import React, { createContext, useState } from "react";
import { User } from "../models";
import { AccountData } from "../models/accountModel";

interface Props {
  children: React.ReactNode;
}

interface TransactionContextData {
  accountIn: User | null;
  setAccountIn: any;
  accountOut: User | null;
  setAccountOut: any;
  value: number;
  setValue: any;
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export const TransactionProvider = ({ children }: Props): JSX.Element => {
  const [value, setValue] = useState<number>(0);
  const [accountIn, setAccountIn] = useState<User | null>(null);
  const [accountOut, setAccountOut] = useState<User | null>(null);

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
