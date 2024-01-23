'use client';

import { getFilteredPosts } from '@/app/lib/getFilteredPosts';
import { useInfiniteQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

import EmptyState from '../EmptyState';
import ListingGrid from './ListingGrid';

const ListingCard = () => {
  const path = usePathname();
  // ['', chss]
  const college = path.split('/')[1];

  const {
    data: listings,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError
  } = useInfiniteQuery({
    queryKey: ['posts', college],
    queryFn: ({ pageParam = 1 }) => getFilteredPosts(college, { pageParam }),
    initialPageParam: 0,
    // 가장 최근에 불러왔던 게시글
    getNextPageParam: (lastPage) => lastPage.studyList.at(-1)?.id,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000
  });
  // lastPage.jobList.at(-1)?.id,
  const { ref, inView } = useInView({
    // div가 보이고나서 몇픽셀 정도의 이벤트가 호출될 것 인가? 보이자마자 바로 호출.그래서0
    threshold: 0,
    // 몇초후에 딜레이 보일것인지.
    delay: 0
  });

  console.log(listings);

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
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings?.pages.map((page) =>
          // Assuming each page has a 'studyList' property
          page.studyList.map((listing: any) => (
            <Fragment key={listing.id}>
              <ListingGrid data={listing} />
            </Fragment>
          ))
        )}
        <div ref={ref} style={{ height: 50 }}></div>
      </div>

      {isFetching && (
        <div className="flex items-center justify-center">
          <ClimbingBoxLoader color="#36d7b7" size={20} />
        </div>
      )}
    </>
  );
};
export default ListingCard;
