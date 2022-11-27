import { InputError } from "../models/inputErrorModels";

export const validateInputUsername = (
  text: string,
  errorUsername: object,
  setErrorUsername: React.Dispatch<React.SetStateAction<InputError>>
): void => {
  if (text.length < 3) {
    setErrorUsername({
      ...errorUsername,
      error: true,
      helperText: "Username precisa ser acima de 3 caracteres!",
    });
  } else {
    setErrorUsername({
      ...errorUsername,
      error: false,
      helperText: "",
    });
  }
};

export const validateInputPassword = (
  text: string,
  setErrorPassword: React.Dispatch<React.SetStateAction<InputError>>
): void => {
  const mustHaveUpper = /[A-Z]{1,}/;
  const mustHaveNumb = /\d{1,}/;
  if (!mustHaveNumb.test(text))
    return setErrorPassword({
      error: true,
      helperText: "A senha deve conter um número!",
    });
  if (!mustHaveUpper.test(text))
    return setErrorPassword({
      error: true,
      helperText: "A senha deve conter uma letra maiúscula!",
    });
  if (text.length < 8) {
    return setErrorPassword({
      error: true,
      helperText: "A senha deve conter pelo menos 8 caracteres!",
    });
  }
  return setErrorPassword({ error: false, helperText: "" });
};

export const validateInputConfirmPassword = (
  password: string,
  confirmPwd: string,
  setErrorPassword: React.Dispatch<React.SetStateAction<InputError>>
): void => {
  if (password !== confirmPwd) {
    return setErrorPassword({ error: true, helperText: "As senhas diferem!" });
  }
  return setErrorPassword({ error: false, helperText: "" });
};
