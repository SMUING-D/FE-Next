'use client';

import { useMemo, useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';

import CategoryAll from '../categoryAll/CategoryAll';
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
      `text-xl rounded-xl p-2 ${pattern === select ? 'bg-blue-500 shadow-md' : ''}`;
  }, [select]);

  const handleSelect = (value: string) => {
    if (value === 'study') {
      setSelect('study');
      setActiveSelectStyle('study');
    } else if (value === 'info') {
      setSelect('info');
      setActiveSelectStyle('info');
    }
  };

  return (
    <>
      <div className="p-20 my-10">
        <div className="flex flex-col items-end justify-center">
          <div className="flex items-center justify-center w-full gap-4">
            <Search />
            {select !== 'all' && (
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
            )}
          </div>
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="flex max-w-xl items-center justify-center gap-5 mt-10 shadow-md p-2 rounded-xl border-[1px] border-gray-100">
            <button
              type="button"
              onClick={() => {
                setSelect('all');
              }}
              className={setActiveSelectStyle('all')}
            >
              <h3
                className={`${select === 'all' && 'text-stone-50 font-bold'} font-normal text-sm text-stone-700 md:text-base`}
              >
                전체
              </h3>
            </button>
            <button
              type="button"
              onClick={() => {
                setSelect('study');
              }}
              className={setActiveSelectStyle('study')}
            >
              <h3
                className={`${select === 'study' && 'text-stone-50 font-bold'} font-normal text-sm text-stone-700 md:text-base`}
              >
                스터디 / 프로젝트 모집
              </h3>
            </button>
            <button
              type="button"
              onClick={() => {
                setSelect('info');
              }}
              className={setActiveSelectStyle('info')}
            >
              <h3
                className={`${select === 'info' && 'text-stone-50 font-bold'} font-normal text-sm text-stone-700 md:text-base`}
              >
                취업 / 정보 교류
              </h3>
            </button>
          </div>
        </div>

        <div className="my-2 w-full">
          {select === 'all' && <CategoryAll onClick={handleSelect} />}
        </div>
        {select !== 'all' && (
          <div className="flex justify-center items-center my-2 w-full">
            {layout === 'grid' ? <ListingCard listType={select} /> : <PreviewPostsView />}
          </div>
        )}
      </div>
    </>
  );
};

export default ListingContainerTest;
