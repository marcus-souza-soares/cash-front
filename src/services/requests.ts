import api from "./api";
import { signUpData, signInData, User } from "../models/userModel";
import { ITransactionsParams } from "../models/transactionsModels";
import {AccountData} from "../models/accountModel"

export interface SignInResponse {
  user: User;
  token: string;
}

export const singUpRequest = async (data: signUpData): Promise<any> => {
  return await api.post("user/new", data);
};

export const singInRequest = async (data: signInData): Promise<SignInResponse> => {
  return await api.post("user/login", data);
};

export const getTransactions = async (): Promise<ITransactionsParams[]> => {
  return await api.get("transactions");
}

export const getAccount = async (accountId: number): Promise<AccountData> => {
  return await api.get("account/" + accountId)
}

export const searchUsers = async (username: string): Promise<User[]> => {
  return await api.get("find/" + username)
}
