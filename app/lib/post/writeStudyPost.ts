import { API_PATH } from '@/app/constants/path';
import { IMAGES_DTO } from '@/app/types';

export type WriteStudyPostProps = {
  title: string;
  content: string;
  college: string;
  startDate: string;
  dueDate: string;
  memberCount: number;
  postImageDtoList: IMAGES_DTO[];
};

const writeStudyPost = async ({
  title,
  content,
  startDate,
  dueDate,
  memberCount,
  college,
  postImageDtoList
}: WriteStudyPostProps) => {
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
      startDate,
      dueDate,
      memberCount,
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

export default writeStudyPost;
