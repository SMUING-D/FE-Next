import { MdEdit } from 'react-icons/md';

import { MYSCHOOL_TEST_DATA } from './data/data';

const SchoolView = ({ isUser }: { isUser: boolean }) => {
  return (
    <div className="flex flex-col gap-7">
      {MYSCHOOL_TEST_DATA.map((school) => (
        <>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-1">
              <div className="flex font-bold">{school.school}</div>
              <div className="flex">-</div>
              <div className="flex font-medium text-gray-600">{school.major}</div>
              {isUser && <MdEdit className="flex ml-auto text-gray-500 cursor-pointer" />}
            </div>
            <div className="flex flex-row gap-1">
              <div className="flex font-light text-xs text-gray-500">{school.startDate}</div>
              <div className="flex font-light text-xs text-gray-500">~</div>
              <div className="flex font-light text-xs text-gray-500">{school.dueDate}</div>
            </div>

            <div className="flex flex-row gap-1 font-normal text-xs text-gray-500">
              {school.description}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default SchoolView;
