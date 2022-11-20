import { useState, useEffect } from "react";

export const useAsync = <T>(
  handler: any,
  immediate: boolean = true
): {
  data: null | T;
  loading: boolean;
  error: string | null;
  act: (...args: any) => Promise<Error | T | null>;
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
