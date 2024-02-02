import { API_PATH } from '@/app/constants/path';

const reportComment = async (commentId: number) => {
  const url = `${process.env.NEXT_PUBLIC_URL}${API_PATH.POSTS}/comments/${commentId}/reports`;
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

export default reportComment;
