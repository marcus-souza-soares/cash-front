import api from "./api";
import { signUpData, signInData, User } from "../models/userModel";
import {
  ITransactionsParams,
  TransactionUserParams,
} from "../models/transactionsModels";
import { AccountData } from "../models/accountModel";

export interface SignInResponse {
  user: User;
  token: string;
}
export const singUpRequest = async (data: signUpData): Promise<any> => {
  return await api.post("user/new", data);
};

export const singInRequest = async (
  data: signInData
): Promise<SignInResponse> => {
  return await api.post("user/login", data);
};

export const getTransactions = async (
  accountId: number,
  filter: string = "all",
  date?: string
): Promise<ITransactionsParams[]> => {
  let URL = `transaction?accountId=${accountId}&filter=${filter}`;
  if (!!date) URL += `&date=${date}`;
  return await api.get(URL);
};

export const getAccount = async (accountId: number): Promise<AccountData> => {
  return await api.get("account/" + accountId);
};

export const searchUsers = async (username: string): Promise<User[]> => {
  return await api.get("user/find/" + username);
};

export const createTransaction = async (
  accountOut: User,
  accountIn: User,
  value: number
): Promise<TransactionUserParams> => {
  const body = {
    userInId: accountIn.id,
    userOutId: accountOut.id,
    accountInId: accountIn.accountId,
    accountOutId: accountOut.accountId,
    value,
  };

  return await api.post("transaction/new", body);
};
