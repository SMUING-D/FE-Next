import { API_PATH } from '@/app/constants/path';

const postComment = async (postId: number, content: string) => {
  const url = `${process.env.NEXT_PUBLIC_URL}${API_PATH.POSTS}/${postId}/comments`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content
    })
  });
  if (!res.ok) {
    throw new Error('Faild to fetch data');
  }

  if (res) {
    return res.json();
  } else {
    return null;
  }
};

export default postComment;
