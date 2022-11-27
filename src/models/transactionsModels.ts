export interface ITransactionsParams {
  id: number;
  debitedAccountId: number;
  creditedAccountId: number;
  balance: number;
  createdAt: any;
}

export interface TransactionUserParams {
  userInId: number;
  userOutId: number;
  accountInId: number;
  accountOutId: number;
  value: number;
}
