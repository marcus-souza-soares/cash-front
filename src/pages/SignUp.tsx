import styled from "styled-components";
import Input from "../components/Form/Input";
import Button from "../components/Form/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signUpData } from "../models/userModel";
import { topToBottom } from "../assets/animations";
import useSignUp from "../hooks/api/useSignUp";
import { toast } from "react-toastify";
import { InputError } from "../models/inputErrorModels";
import {
  validateInputUsername,
  validateInputPassword,
  validateInputConfirmPassword,
} from "../utils/input";

export default function SignUp(): JSX.Element {
  const [userData, setUserData] = useState<signUpData>({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errorUsername, setErrorUsername] = useState<InputError>({
    error: false,
    helperText: "",
  });

  const [errorPassword, setErrorPassword] = useState<InputError>({
    error: false,
    helperText: "",
  });

  const [errorConfirmPassword, setErrorConfirmPassword] = useState<InputError>({
    error: false,
    helperText: "",
  });

  const { signUpLoading, singUpRequest } = useSignUp();

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    console.log(userData);
    singUpRequest(userData)
      .then((res) => {
        if (res && !(res instanceof Error)) {
          toast("Cadastro efetuado com sucesso!");
        }
      })
      .catch((e) => {
        console.log(e);
        toast("Não foi possível fazer o cadastro.");
      });
  };

  return (
    <Container>
      <div>
        <img src="../src/assets/images/logo.png" alt="" />
      </div>
      <form action="" onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Username"
          loading={signUpLoading}
          error={errorUsername.error}
          helperText={errorUsername.helperText}
          value={userData.username}
          onChange={(e) => {
            setUserData({ ...userData, username: e.target.value });
            validateInputUsername(userData.username, setErrorUsername);
          }}
        />
        <Input
          type="password"
          label="Password"
          loading={signUpLoading}
          helperText={errorPassword.helperText}
          error={errorPassword.error}
          value={userData.password}
          onChange={(e) => {
            setUserData({ ...userData, password: e.target.value });
            validateInputPassword(userData.password, setErrorPassword);
          }}
        />
        <Input
          type="password"
          label="Confirm Password"
          loading={signUpLoading}
          error={errorConfirmPassword.error}
          helperText={errorConfirmPassword.helperText}
          value={userData.confirmPassword}
          onChange={(e) => {
            setUserData({
              ...userData,
              confirmPassword: e.target.value,
            });
            validateInputConfirmPassword(
              userData.password,
              userData.confirmPassword,
              setErrorConfirmPassword
            );
          }}
        />
        <Button variant="outlined" type="submit" loading={signUpLoading}>
          Login
        </Button>
        <Link to="/login">
          <h2>Já possui conta? Entre!</h2>
        </Link>
      </form>
    </Container>
  );
}

const Container = styled.main`
  width: 500px;
  min-height: 600px;
  background-color: #fff;
  border-radius: 5px;
  padding-bottom: 30px;
  border-radius: 10px;
  box-shadow: 6px 5px 5px -3px rgba(0, 0, 0, 0.44);
  animation: ${topToBottom} 300ms;

  > div {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #000000;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 195px;
  }

  div img {
    width: 50%;
    object-fit: cover;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    margin-top: 195px;
  }

  button {
    margin: 0 auto;
    height: 45px;
  }
  h2 {
    margin-top: 72px;
  }
  a {
    margin: 0 auto;
  }
`;
