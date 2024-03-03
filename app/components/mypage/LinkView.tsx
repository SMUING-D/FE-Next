import Link from 'next/link';
import { FaLink } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

import { MYLINK_TEST_DATA } from './data/data';

const LinkView = ({ isUser }: { isUser: boolean }) => {
  return (
    <div className="flex flex-col gap-7">
      {MYLINK_TEST_DATA.map((link) => (
        <>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <FaLink className="flex text-gray-700" />
              <Link href={link.link} shallow={true}>
                <div className="flex font-bold">{link.linkName}</div>
              </Link>
              {isUser && <MdEdit className="flex ml-auto text-gray-500 cursor-pointer" />}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default LinkView;
