import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaTrashCan } from 'react-icons/fa6';

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
      <div className="flex flex-row gap-4 items-center self-center ml-auto min-[320px]:mt-2">
        <FaTrashCan className="flex text-lg text-stone-800" onClick={handleStudyDelete} />
        <div
          className="flex p-2 bg-zinc-200 text-gray-900 rounded-lg text-sm cursor-pointer"
          onClick={handleStudyState}
        >
          {studyState ? '모집 완료' : '모집 중'}
        </div>
      </div>
    </div>
  );
};

export default StudyManament;
