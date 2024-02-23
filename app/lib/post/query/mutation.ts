import { API_PATH } from '@/app/constants/path';

const getPostLike = async (postId: number) => {
  const url = `${process.env.NEXT_PUBLIC_URL}${API_PATH.POSTS}/${postId}/likes`;
  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!res.ok) {
    throw new Error('좋아요에 실패하였습니다.');
  }

  if (res) {
    return res.json();
  } else {
    return null;
  }
};

export default getPostLike;
