'use client';

import { useQueryClient } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';

import ListingGrid from '../listings/ListingGrid';

type CategoryAllProps = {
  onClick: (value: string) => void;
};

const CategoryAll = ({ onClick }: CategoryAllProps) => {
  const path = usePathname();
  const college = path.split('/')[1];
  const cache = useQueryClient();
  const studyData = cache.getQueryData(['posts', college, 'study']);
  const jobData = cache.getQueryData(['posts', college, 'info']);
  const jobList = jobData.pages[0].jobList;
  const studyList = studyData.pages[0].studyList;

  return (
    <div className="flex flex-col gap-12 mt-20 items-center justify-center">
      <div className="flex flex-col gap-6">
        <div className="font-bold text-stone-700 text-xl">스터디 · 프로젝트 모집</div>
        <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-2">
          {studyList.map((studyData: any, index: any) => (
            <ListingGrid key={index} data={studyData} />
          ))}
        </div>
        <div
          className="p-3 mt-5 font-md text-gray-500 text-sm cursor-pointer self-center hover:bg-stone-100 hover:rounded-2xl"
          onClick={() => onClick('study')}
        >
          더 보기
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="font-bold text-stone-700 text-xl">취업 정보 교류</div>
        <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-2">
          {jobList.map((jobData: any, index: any) => (
            <ListingGrid key={index} data={jobData} />
          ))}
        </div>
        <div
          className="p-3 mt-5 flex font-md text-gray-500 text-sm cursor-pointer self-center hover:bg-stone-100 hover:rounded-2xl"
          onClick={() => onClick('info')}
        >
          더 보기
        </div>
      </div>
    </div>
  );
};

export default CategoryAll;
