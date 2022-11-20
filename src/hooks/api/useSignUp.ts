import { useAsync } from "../useAsync";

import * as userApi from "../../services/requests";

export default function useSignUp() {
  const {
    loading: signUpLoading,
    error: signUpError,
    act: singUpRequest,
  } = useAsync(userApi.singUpRequest, false);

  return {
    signUpLoading,
    signUpError,
    singUpRequest,
  };
}
