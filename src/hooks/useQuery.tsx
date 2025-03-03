import axios from 'axios';
import { useEffect, useState } from 'react';

import { TData } from '../types';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export const useQuery = (url: string, pageNum: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<TData[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setData([]);
  }, [url]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios
      .get(url, {
        method: 'GET',
        params: {
          page: pageNum,
        },
      })
      .then(resp => {
        setData(data.concat(resp.data.results));
        setHasMore(resp.data.info.next !== null);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setError(true);
        console.log('Request error', err.message);
      });
  }, [url, pageNum]);

  return { loading, error, data, hasMore };
};
