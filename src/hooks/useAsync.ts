import { useState, useEffect } from "react";

export const useAsync = (
  handler: any,
  immediate: boolean = true
): {
  data: null | any;
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
      const data = await handler(...args);
      setData(data);
      setLoading(false);
      return data;
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
