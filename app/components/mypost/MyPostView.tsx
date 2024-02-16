'use client';

import getUserLikePost from '@/app/lib/getUserLikePost';
import getUserWritePost from '@/app/lib/getUserWritePost';
import { POST_DTO } from '@/app/types';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

import EmptyState from '../EmptyState';
import MyPost from './MyPost';

type MyPostQueryKeyType = 'MY_POSTS' | 'MY_LIKE_POSTS';

type MyPostViewProps = {
  userId: string;
  queryKey: MyPostQueryKeyType;
};

const MyPostView = ({ queryKey }: MyPostViewProps) => {
  const {
    data: writePosts,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError
  } = useInfiniteQuery({
    queryKey: [queryKey],
    queryFn:
      queryKey === 'MY_POSTS'
        ? ({ pageParam = 0 }) => getUserWritePost(pageParam)
        : ({ pageParam = 0 }) => getUserLikePost(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.result.isLast === false) {
        return lastPage.result.nextCursor;
      }
      return null;
    },
    staleTime: 60 * 1000,
    gcTime: 300 * 1000
  });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isError || writePosts?.pages?.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <div className="flex flex-col gap-5 font-normal">
        {writePosts?.pages.map((page, i) => (
          <Fragment key={i}>
            {page.result.pageDtos.map((myPostData: POST_DTO) => (
              <div key={myPostData.id}>
                <MyPost myPostData={myPostData} />
              </div>
            ))}
          </Fragment>
        ))}
      </div>
      <div style={{ height: 100 }} ref={ref} />
      {isFetching && (
        <div className="flex items-center justify-center">
          <ClimbingBoxLoader color="#36d7b7" size={20} />
        </div>
      )}
    </>
  );
};

export default MyPostView;
