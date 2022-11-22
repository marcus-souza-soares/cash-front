import styled from "styled-components";
import Input from "../components/Form/Input";
import Button from "../components/Form/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInData } from "../models/userModel";
import { useAuth } from "../hooks/useAuth";
import useLogin from "../hooks/api/useLogin";
import { topToBottom } from "../assets/animations";
import { toast } from "react-toastify";
import { InputError } from "../models/inputErrorModels";
import { validateInputUsername, validateInputPassword } from "../utils/input";

//Marcus-ssouza
//marcusS123
export default function SignIn(): JSX.Element {
  const navigate = useNavigate();
  const [userDataLogin, setUserDataLogin] = useState<signInData>({
    username: "",
    password: "",
  });

  const [errorUsername, setErrorUsername] = useState<InputError>({
    error: false,
    helperText: "",
  });

  const [errorPassword, setErrorPassword] = useState<InputError>({
    error: false,
    helperText: "",
  });

  const { signIn } = useAuth();
  const { loginLoading, singInRequest } = useLogin();

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    console.log(userDataLogin);
    singInRequest(userDataLogin)
      .then((res) => {
        if (res && !(res instanceof Error)) {
          toast("Logado com sucesso!");
          signIn(res);
          navigate("/home");
        }
      })
      .catch(() => toast("Não foi possível fazer login."));
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
          loading={loginLoading}
          error={errorUsername.error}
          helperText={errorUsername.helperText}
          value={userDataLogin.username}
          onChange={(e) => {
            setUserDataLogin({ ...userDataLogin, username: e.target.value });
            validateInputUsername(userDataLogin.username, setErrorUsername);
          }}
        />
        <Input
          type="password"
          label="Password"
          loading={loginLoading}
          helperText={errorPassword.helperText}
          error={errorPassword.error}
          value={userDataLogin.password}
          onChange={(e) => {
            setUserDataLogin({ ...userDataLogin, password: e.target.value });
            validateInputPassword(userDataLogin.password, setErrorPassword);
          }}
        />
        <Button variant="outlined" loading={loginLoading} type="submit">
          Login
        </Button>
        <Link to="/cadastro">
          <h2>Não tem conta? cadastre-se!</h2>
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
