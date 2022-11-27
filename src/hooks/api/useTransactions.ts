import {useAsync} from '../useAsync';
import * as transactionsApi from '../../services/requests';

export default function useTransactions(){
  const {
    data: transactions,
    loading: transactionsLoading,
    error: transactionsError,
    act: getTransactions,
  } = useAsync(transactionsApi.getTransactions, true);

  return {
    transactions,
    transactionsLoading,
    transactionsError,
    getTransactions,
  };
}

