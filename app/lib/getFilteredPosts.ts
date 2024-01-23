import { API_PATH } from '../constants/path';

type Props = {
  pageParam?: number;
  listType?: string;
};

export const getFilteredPosts = async (college: string, { pageParam, listType }: Props) => {
  const url = `${process.env.NEXT_PUBLIC_URL}${API_PATH.POSTS}/${college}?cursor=${pageParam}&listType=${listType}`;

  const res = await fetch(url, {
    next: {
      tags: ['posts', college, listType]
    },
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
