import {useAsync} from '../useAsync';
import * as transactionsApi from '../../services/requests';

export default function UsePostTransaction(){
  const {
    data: postTransaction,
    loading: transactionLoading,
    error: transactionError,
    act: createTransaction,
  } = useAsync(transactionsApi.createTransaction, false);

  return {
    postTransaction,
    transactionLoading,
    transactionError,
    createTransaction,
  };
}

