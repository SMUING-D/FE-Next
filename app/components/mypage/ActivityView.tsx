import { MdEdit } from 'react-icons/md';

import { MYACTIVITY_TEST_DATA } from './data/data';

const ActivityView = () => {
  return (
    <div className="flex flex-col gap-7">
      {MYACTIVITY_TEST_DATA.map((activity) => (
        <>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-1">
              <div className="flex font-bold">{activity.activity}</div>
              <MdEdit className="flex ml-auto text-gray-500 cursor-pointer" />
            </div>
            <div className="flex flex-row gap-1">
              <div className="flex font-light text-xs text-gray-500">{activity.startDate}</div>
              <div className="flex font-light text-xs text-gray-500">~</div>
              <div className="flex font-light text-xs text-gray-500">{activity.dueDate}</div>
            </div>

            <div className="flex flex-row gap-1 font-normal text-xs text-gray-500">
              {activity.description}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ActivityView;
