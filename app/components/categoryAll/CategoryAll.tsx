import { useQueryClient } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';

import ListingGrid from '../listings/ListingGrid';

type CategoryAllProps = {
  onClick: (value: string) => void;
};

const CategoryAll = ({ onClick }: CategoryAllProps) => {
  const pathname = usePathname();
  const college = pathname.slice(1);
  const cache = useQueryClient();
  const data = cache.getQueryData(['posts', college]);
  const jobList = data.pages[0].jobList;
  const studyList = data.pages[0].studyList;

  return (
    <div className="flex flex-col gap-12 mt-10">
      <div className="flex flex-col gap-6 shadow-md p-8 rounded-md border-[1px] border-gray-100">
        <div className="font-bold text-gray-700 text-xl">스터디 · 프로젝트 모집</div>
        <div className="flex flex-row gap-2 flex-wrap">
          {studyList.map((studyData: any, index: any) => (
            <ListingGrid key={index} data={studyData} />
          ))}
        </div>
        <div
          className="flex font-md text-gray-500 text-sm cursor-pointer ml-auto"
          onClick={() => onClick('study')}
        >
          더 보기
        </div>
      </div>
      <div className="flex flex-col gap-6 shadow-md p-6 rounded-md border-[1px] border-gray-100">
        <div className="font-bold text-gray-700 text-xl">취업 정보 교류</div>
        <div className="flex flex-row gap-2 flex-wrap">
          {jobList.map((jobData: any, index: any) => (
            <ListingGrid key={index} data={jobData} />
          ))}
        </div>
        <div
          className="font-md text-gray-500 text-sm cursor-pointer ml-auto"
          onClick={() => onClick('info')}
        >
          더 보기
        </div>
      </div>
    </div>
  );
};

export default CategoryAll;
