export interface User {
  accountId: number;
  username: string;
  id: number;
}

export interface signUpData {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface signInData {
  username: string;
  password: string;
}
