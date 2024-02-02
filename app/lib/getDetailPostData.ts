import { API_PATH } from '../constants/path';
import { POST_DTO } from '../types';

export const getDetailPostData = async (postId: string, postType: string): Promise<POST_DTO> => {
  const url = `${process.env.NEXT_PUBLIC_URL}${API_PATH.POSTS}/${postId}?postType=${postType}`;

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
