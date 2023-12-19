import axios, { AxiosResponse } from "axios";
import { useState, useEffect, useCallback } from "react";

const useGet = (url: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<AxiosResponse | null>(null);
  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const actionData = await axios.get(url);
      setData(actionData);
    } catch (e: any) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [url]);
  useEffect(() => {
    loadData();
  }, [loadData]);
  return { data: data?.data, loading, error, refetch: loadData };
};

export default useGet;
