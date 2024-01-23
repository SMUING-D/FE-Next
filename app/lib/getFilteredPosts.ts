import { API_PATH } from '../constants/path';

type Props = {
  pageParam?: number;
};

export const getFilteredPosts = async (college: string, { pageParam }: Props) => {
  const url = `${process.env.NEXT_PUBLIC_URL}${API_PATH.POSTS}/${college}?cursor=${pageParam}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
