'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';

import Heading from '../Heading';
import PreviewPostsView from '../post/PreviewPostsView';
import ListingCard from './ListingCard';

const ListingContainer = () => {
  const [layout, setLayout] = useState('grid');
  const searchParams = useSearchParams();

  let category = searchParams.get('category');

  if (category === null) {
    category = '전체';
  }

  const setActiveStyle = useMemo(() => {
    return (pattern: string) =>
      `text-xl rounded-2xl p-2 ${pattern === layout ? 'bg-blue-300' : ''}`;
  }, [layout]);

  return (
    <>
      <div className="p-20 my-10">
        <Heading title={category} subtitle={`${category} 게시글입니다.`} center />
        <div className="flex flex-col items-end justify-center">
          <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-1">
            <div className="">
              <button
                type="button"
                onClick={() => setLayout('grid')}
                className={setActiveStyle('grid')}
              >
                <BsFillGridFill />
              </button>
              <button
                type="button"
                onClick={() => setLayout('list')}
                className={setActiveStyle('list')}
              >
                <BsList />
              </button>
            </div>
          </div>
          <div className="my-2 w-full">
            {layout === 'grid' ? <ListingCard /> : <PreviewPostsView />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingContainer;
