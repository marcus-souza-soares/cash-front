import api from "./api";
import { signUpData, signInData, User } from "../models/userModel";
import { ITransactionsParams } from "../models/transactionsModels";

export interface SignInResponse {
  user: User;
  token: string;
}

export const singUpRequest = async (data: signUpData): Promise<any> => {
  return await api.post("user/new", data);
};

export const singInRequest = async (data: signInData): Promise<any> => {
  return await api.post("user/login", data);
};

export const getTransactions = async (): Promise<ITransactionsParams[]> => {
  return await api.get("transactions");
}

