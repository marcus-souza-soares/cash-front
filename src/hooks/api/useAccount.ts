import { useAsync } from "../useAsync";
import * as accountApi from "../../services/requests";

export default function useAccount() {
  const {
    data: accountData,
    loading: accountLoading,
    error: accountError,
    act: getAccount,
  } = useAsync(accountApi.getAccount, false);

  return {
    accountData,
    accountLoading,
    accountError,
    getAccount,
  };
}
  