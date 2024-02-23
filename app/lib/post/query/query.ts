import { useQuery } from '@tanstack/react-query';

import { getDetailPostData } from '../../getDetailPostData';

const useGetDetailPostData = (postId: string, postType: string) => {
  return useQuery({
    queryKey: ['post', { postId, postType }],
    queryFn: () => getDetailPostData(postId, postType),
    staleTime: 3000
  });
};

export { useGetDetailPostData };
