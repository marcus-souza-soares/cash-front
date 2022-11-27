import { useState, useEffect } from "react";
import { User, AccountData, ITransactionsParams } from '../models'

export const useAsync = <T extends (User & AccountData & ITransactionsParams[]  ) | null>(
  handler: any,
  immediate: boolean = true
): {
  data: User & AccountData & ITransactionsParams[] & User[] | null;
  loading: boolean;
  error: string | null;
  act: (...args: any) => Promise<Error | T >;
} => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(immediate);
  const [error, setError] = useState<string | null>(null);

  const act = async (...args: any): Promise<T | Error | null> => {
    setLoading(true);
    setError(null);

    try {
      const promise = await handler(...args);
      setData(promise.data);
      setLoading(false);
      return promise.data;
    } catch (error: any) {
      setError(error);
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    if (immediate) {
      act();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
    error,
    act,
  };
};
