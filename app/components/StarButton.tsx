import { FaStar } from 'react-icons/fa';

const StarButton = () => {
  // 실제, user정보 중(id)와, 이 게시글의 id를 서버에 전송해서 상태 판단.
  const hasFavorited = false;
  return (
    <div className="relative hover:opacity-80 transition cursor-pointer">
      <FaStar size={32} className="fill-white absolute -top-[2px] -right-[2px]" />;
      <FaStar
        size={32}
        className={`${
          !hasFavorited ? 'fill-yellow-400 ' : 'fill-neutral-500/70 '
        } absolute -top-[2px] -right-[2px]`}
      />
      ;
    </div>
  );
};

export default StarButton;
