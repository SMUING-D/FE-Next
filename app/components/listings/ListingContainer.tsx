'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';

import Heading from '../Heading';
import Search from '../navbar/Search';
import PreviewPostsView from '../post/PreviewPostsView';
import ListingCard from './ListingCard';

const ListingContainer = () => {
  const [layout, setLayout] = useState('grid');
  const [select, setSelect] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const onChangeInfo = useCallback(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('info', 'on');
    router.replace(`?${newSearchParams.toString()}`);
  }, [router, searchParams]);

  const onChangeStudy = useCallback(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete('info');
    router.replace(`?${newSearchParams.toString()}`);
  }, [router, searchParams]);

  let category = searchParams.get('category');

  if (category === null) {
    category = '전체';
  }

  const setActiveStyle = useMemo(() => {
    return (pattern: string) =>
      `text-xl rounded-2xl p-2 ${pattern === layout ? 'bg-blue-300' : ''}`;
  }, [layout]);

  const setActiveSelectStyle = useMemo(() => {
    return (pattern: string) =>
      `text-xl rounded-2xl p-2 ${pattern === select ? 'bg-blue-300' : ''}`;
  }, [select]);

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
        </div>
        <div className="flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => {
              onChangeStudy();
              setSelect('study');
            }}
            className={setActiveSelectStyle('study')}
          >
            <h3>스터디 / 프로젝트 모집</h3>
          </button>
          <button
            type="button"
            onClick={() => {
              onChangeInfo();
              setSelect('info');
            }}
            className={setActiveSelectStyle('info')}
          >
            <h3>취업 / 정보 교류</h3>
          </button>
        </div>
        <div
          className="flex items-center
        justify-center p-10"
        >
          <Search />
        </div>
        <div className="my-2 w-full">
          {layout === 'grid' ? <ListingCard /> : <PreviewPostsView />}
        </div>
      </div>
    </>
  );
};

export default ListingContainer;
