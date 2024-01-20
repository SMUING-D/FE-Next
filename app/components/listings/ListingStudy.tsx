import { FaBook } from 'react-icons/fa';

import Carousel from '../Carousel';

const ListingStudy = () => {
  return (
    <>
      <div>
        <div className="text-2xl font-bold flex items-center gap-3">
          <FaBook /> 인기 스터디
        </div>
        <div className="font-light text-neutral-500 mt-2 dark:text-white">
          현재 가장 인기 있는 스터디에 참여해 보세요!!
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-center">
        <Carousel />
      </div>
    </>
  );
};

export default ListingStudy;
