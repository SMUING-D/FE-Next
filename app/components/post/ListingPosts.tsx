'use client';

import { getFilteredPosts } from '@/app/lib/getFilteredPosts';
import { Listing } from '@/app/types';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

import EmptyState from '../EmptyState';
import PostPreview from './PostPreview';

const ListingPosts = () => {
  const params = useSearchParams();
  const category = params.get('category') || '';
  const {
    data: listings,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError
  } = useInfiniteQuery<
    Listing[],
    Object,
    InfiniteData<Listing[]>,
    [_1: string, _2: string],
    number
  >({
    queryKey: ['posts', category],
    queryFn: ({ pageParam = 1 }) => getFilteredPosts(category, { pageParam }),
    initialPageParam: 0,
    // 가장 최근에 불러왔던 게시글
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000
  });

  const { ref, inView } = useInView({
    // div가 보이고나서 몇픽셀 정도의 이벤트가 호출될 것 인가? 보이자마자 바로 호출.그래서0
    threshold: 0,
    // 몇초후에 딜레이 보일것인지.
    delay: 0
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isError || listings?.pages?.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <div className="mt-10">
        {listings?.pages.map((page, i) => (
          <Fragment key={i}>
            {page.map((listing) => (
              <PostPreview key={listing.postId} data={listing} />
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

export default ListingPosts;
