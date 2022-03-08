import { useState, useEffect } from 'react';

export const useFetchData = (url, method = 'GET') => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);
  const [options, setOptions] = useState(null);

  const patchData = (patchData) => {
    setOptions({
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(patchData),
    });
  };
  useEffect(() => {
    const fetchdata = async (fetchoptions) => {
      setError(null);
      try {
        const res = await fetch(url, { ...fetchoptions });
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const dataj = await res.json();
        setData(dataj);
        setError(null);
        setIsPending(false);
      } catch (err) {
        setError(err.message);
        setData(null);
      }
    };
    if (method === 'GET') {
      fetchdata(url);
    }
    if (method === 'PATCH' && options) {
      fetchdata(options);
    }
  }, [url, method, options]);

  return { error, isPending, data, patchData };
};
