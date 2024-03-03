import { MdEdit } from 'react-icons/md';

import { MYJOB_TEST_DATA } from './data/data';

const JobView = () => {
  return (
    <div className="flex flex-col gap-7">
      {MYJOB_TEST_DATA.map((job) => (
        <>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-1">
              <div className="flex font-bold">{job.company}</div>
              <div className="flex">-</div>
              <div className="flex font-medium text-gray-600">{job.position}</div>
              <MdEdit className="flex ml-auto text-gray-500 cursor-pointer" />
            </div>
            <div className="flex flex-row gap-1">
              <div className="flex font-light text-xs text-gray-500">{job.startDate}</div>
              <div className="flex font-light text-xs text-gray-500">~</div>
              <div className="flex font-light text-xs text-gray-500">{job.dueDate}</div>
            </div>

            <div className="flex flex-row gap-1 font-normal text-xs text-gray-500">
              {job.description}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default JobView;
