import { useState, useEffect, useCallback } from "react";

interface FetchStatus<T> {
  data?: T;
  error?: { message: string };
}

interface UseFetchReturnType<T> extends FetchStatus<T> {
  refetch: () => Promise<void>;
}

interface FetchOption {
  enabled?: boolean;
}

const useFetch = <T>(
  fetch: () => Promise<T>,
  { enabled }: FetchOption = { enabled: true }
): UseFetchReturnType<T> => {
  const [fetchStatus, setFetchStatus] = useState<FetchStatus<T>>({
    data: undefined,
    error: undefined,
  });

  const fetchApi = useCallback(async () => {
    try {
      const response = await fetch();

      setFetchStatus({ data: response, error: undefined });
    } catch (error: any) {
      const errorMessage = error.message;

      setFetchStatus({ data: undefined, error: { message: errorMessage } });
    }
  }, [fetch]);

  useEffect(() => {
    if (enabled) {
      fetchApi();
    }
  }, [enabled, fetchApi]);

  return { ...fetchStatus, refetch: fetchApi };
};

export default useFetch;
