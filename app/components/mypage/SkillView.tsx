import { MdEdit } from 'react-icons/md';

import { MYSKILL_TEST_DATA } from './data/data';

const SkillView = () => {
  return (
    <div className="flex flex-col gap-7">
      {MYSKILL_TEST_DATA.map((skill) => (
        <>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-1">
              <div className="flex font-bold">{skill.skill}</div>
              <div className="flex">-</div>
              <div className="flex font-medium text-gray-600">{skill.level}</div>
              <MdEdit className="flex ml-auto text-gray-500 cursor-pointer" />
            </div>
            <div className="flex flex-row gap-1">
              <div className="flex font-light text-xs text-gray-500">{skill.startDate}</div>
              <div className="flex font-light text-xs text-gray-500">~</div>
              <div className="flex font-light text-xs text-gray-500">{skill.dueDate}</div>
            </div>

            <div className="flex flex-row gap-1 font-normal text-xs text-gray-500">
              {skill.description}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default SkillView;
