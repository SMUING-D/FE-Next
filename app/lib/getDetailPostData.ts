import { API_PATH } from '../constants/path';
import { JOB_DETAIL_DTO } from '../types';

export const getDetailPostData = async (jobId: string): Promise<JOB_DETAIL_DTO> => {
  const url = `${process.env.NEXT_PUBLIC_URL}${API_PATH.POSTS}/${jobId}`;

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
