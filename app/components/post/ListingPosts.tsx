'use client';

import { getFilteredPosts } from '@/app/lib/getFilteredPosts';
import { JOB_LIST, STUDY_LIST } from '@/app/types';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

import EmptyState from '../EmptyState';
import PostPreview from './PostPreview';

type ListingPostsProps = {
  listType: string;
};

type InfiniteQueryResult = {
  studyList?: STUDY_LIST[];
  jobList?: JOB_LIST[];
};

const ListingPosts = ({ listType }: ListingPostsProps) => {
  const path = usePathname();
  const college = path.split('/')[1];

  const {
    data: listings,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError
  } = useInfiniteQuery<
    InfiniteQueryResult,
    Object,
    InfiniteData<InfiniteQueryResult>,
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ['posts', college, listType],
    queryFn: ({ pageParam = 1 }) =>
      getFilteredPosts(college, { pageParam: Number(pageParam), listType }),
    initialPageParam: 0,
    // 가장 최근에 불러왔던 게시글
    getNextPageParam:
      listType === 'study'
        ? (lastPage) => lastPage.studyList.at(-1)?.id
        : (lastPage) => lastPage.jobList.at(-1)?.id,
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
      <div className="pt-10 w-full max-w-6xl">
        {listings?.pages.map((page) =>
          listType === 'study'
            ? page.studyList.map((listing: STUDY_LIST) => (
                <Fragment key={listing.id}>
                  <PostPreview data={listing} />
                </Fragment>
              ))
            : page.jobList.map((listing: JOB_LIST) => (
                <Fragment key={listing.id}>
                  <PostPreview data={listing} />
                </Fragment>
              ))
        )}
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
