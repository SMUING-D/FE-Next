import useSWR from 'swr';

import { fetcher } from '../utils/fetcher';

export const useLists = (params: string | null) => {
  console.log(params);
  const url = `${process.env.NEXT_PUBLIC_URL}api/posts?category=${params}`;

  const { data, isLoading, error } = useSWR(url, fetcher);

  return {
    data,
    isLoading,
    error
  };
};
