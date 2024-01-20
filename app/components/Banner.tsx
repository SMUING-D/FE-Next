'use client';

import ReactRotatingText from 'react-rotating-text';

const Banner = () => {
  return (
    <div className="p-20 my-10 flex items-center justify-center">
      <strong className="bg-gradient-to-r from-blue-400 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        <div className="flex text-[30px]">
          <ReactRotatingText
            items={[
              '인문사회과학대학',
              '사범대학',
              '경영경제대학',
              '융합공과대학',
              '문화예술대학 '
            ]}
          />
          <h3>관련 게시글 확인하고 취업 스펙 쌓아보세요!</h3>
        </div>
      </strong>
    </div>
  );
};

export default Banner;
