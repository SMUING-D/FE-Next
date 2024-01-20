'use client';

import { useMemo, useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';

import Search from '../navbar/Search';
import PreviewPostsView from '../post/PreviewPostsView';
import ListingCard from './ListingCard';

const ListingContainerTest = () => {
  const [layout, setLayout] = useState('grid');
  const [select, setSelect] = useState('all');

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
        <div className="flex flex-col items-end justify-center">
          <div className="flex items-center justify-center w-full gap-4">
            <Search />
            <div className="flex justify-between items-center border-b border-base-300">
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
        <div className="flex items-center justify-center gap-5 mt-10">
          <button
            type="button"
            onClick={() => {
              setSelect('all');
            }}
            className={setActiveSelectStyle('all')}
          >
            <h3>전체</h3>
          </button>
          <button
            type="button"
            onClick={() => {
              setSelect('study');
            }}
            className={setActiveSelectStyle('study')}
          >
            <h3>스터디 / 프로젝트 모집</h3>
          </button>
          <button
            type="button"
            onClick={() => {
              setSelect('info');
            }}
            className={setActiveSelectStyle('info')}
          >
            <h3>취업 / 정보 교류</h3>
          </button>
        </div>
        <div className="my-2 w-full">
          {layout === 'grid' ? <ListingCard /> : <PreviewPostsView />}
        </div>
      </div>
    </>
  );
};

export default ListingContainerTest;
