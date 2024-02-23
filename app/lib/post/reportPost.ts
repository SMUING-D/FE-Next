import { API_PATH } from '@/app/constants/path';

const reportPost = async (postId: number) => {
  const url = `${process.env.NEXT_PUBLIC_URL}${API_PATH.POSTS}/report/${postId}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
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

export default reportPost;
