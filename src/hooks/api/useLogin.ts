import {useAsync} from '../useAsync';
import * as userApi from '../../services/requests';

export default function useLogin(){
  const {
    data: userData,
    loading: loginLoading,
    error: loginError,
    act: singInRequest,
  } = useAsync(userApi.singInRequest, false);

  return {
    userData,
    loginLoading,
    loginError,
    singInRequest,
  };
}

