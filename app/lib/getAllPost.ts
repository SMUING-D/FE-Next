import { API_PATH } from '../constants/path';

export const getAllPost = async () => {
  const url = `${process.env.NEXT_PUBLIC_URL}${API_PATH.POSTS}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw (
      (new Error('Failed to fetch data'),
      {
        cache: 'no-store'
      })
    );
  }

  return res.json();
};
