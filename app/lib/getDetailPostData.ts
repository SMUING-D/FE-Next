import { Post } from '../types';

export const getDetailPostData = async (id: string): Promise<Post> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/detail/posts?postId=${id}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
