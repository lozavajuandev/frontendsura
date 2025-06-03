import { useState, useEffect } from "react";

export function useFetch(url, method) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (fetching) {
      const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`Error: ${response.status}`);
          setIsLoading(false);
          const data = await response.json();
          setData(data);
        } catch (error) {
          setError(error);
          console.log(`error: ${error}`);
        }
      };
      fetchData();
    }
  }, [fetching]);

  return { data, error, isLoading, setFetching, fetching };
}
