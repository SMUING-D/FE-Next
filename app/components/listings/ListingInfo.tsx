import React from 'react';

import Avatar from '../Avatar';

const ListingInfo = () => {
  return (
    <div className="col span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex flex-row items-center gap-3">
          <Avatar />
          {/* post.User에서 정보 받아오기 */}
          <div>작성자: 김용민</div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 font-light text-neutral-500 dark:text-white">
        <div>5명 모집</div>
        <div>오프라인</div>
        <div>학술정보관 L-506</div>
      </div>
      <hr />
      <div className="text-lg font-light text-neutral-400 dark:text-white">
        안녕하세요! 인문사회과학대학 XX학부 XX학년에 재학중인 XXX입니다. 이번에 000 쪽으로 취업을
        준비하며, 혼자 공부하는데 동기부여가 많이 부족한 것 같아 다같이 해보면 좋을듯 하여 팀원을
        모집하게 되었습니다. 이런 좋은 서비스가 있다는 것을 처음알았네요!! 참여 인원 구합니다!! 많이
        신청해주세요!!
      </div>
    </div>
  );
};

export default ListingInfo;
