import { API_PATH } from '@/app/constants/path';
import { IMAGES_DTO } from '@/app/types';

type WriteJobPostProps = {
  title: string;
  content: string;
  college: string;
  type: string;
  postImageDtoList: IMAGES_DTO[];
};

const writeJobPost = async ({
  title,
  content,
  college,
  type,
  postImageDtoList
}: WriteJobPostProps) => {
  const url = `${process.env.NEXT_PUBLIC_URL}${API_PATH.POSTS}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      content,
      college,
      type,
      postImageDtoList
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

export default writeJobPost;
