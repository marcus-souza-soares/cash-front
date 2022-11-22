import React, { createContext, useState, Dispatch } from "react";
import { AccountData } from "../models/accountModel";

interface Props {
  children: React.ReactNode;
}

interface AccountContextData {
  account: AccountData | null;
  setAccount: any;
}

export const AccountContext = createContext<AccountContextData>(
  {} as AccountContextData
);

export const AccountProvider = ({ children }: Props): JSX.Element => {
  const [account, setAccount] = useState<AccountData>({
    id: 0,
    balance: 0
  });

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
};
