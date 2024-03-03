import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export type StudyType = {
  id: number;
  title: string;
  content: string;
  studyState: boolean;
};

type StudyManamentProps = {
  studyData: StudyType;
};

const StudyManament = ({ studyData }: StudyManamentProps) => {
  const [studyState, setStudyState] = useState(false);

  const handleStudyState = () => {
    setStudyState(!studyState);
  };

  const handleStudyDelete = () => {
    toast('스터디 삭제');
  };

  useEffect(() => {
    setStudyState(studyData.studyState);
  }, [studyData]);

  return (
    <div
      className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row min-[320px]:flex-col p-5 border-2 rounded-lg border-gray-200"
      key={studyData.id}
    >
      <div className="self-center min-[320px]:self-start">{studyData.title}</div>
      <div className="flex flex-row gap-2 self-center ml-auto min-[320px]:mt-2">
        <div
          className="flex px-3 py-2 bg-rose-500 text-stone-100 rounded-xl text-sm cursor-pointer"
          onClick={handleStudyDelete}
        >
          삭제
        </div>
        <div
          className="flex px-3 py-2 bg-zinc-500 text-stone-100 rounded-xl text-sm cursor-pointer"
          onClick={handleStudyState}
        >
          {studyState ? '모집 완료' : '모집 중'}
        </div>
      </div>
    </div>
  );
};

export default StudyManament;
