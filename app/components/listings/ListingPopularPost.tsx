'use client';

import { useRouter } from 'next/navigation';

type ListingPopularPostType = {
  college: string;
  route: string;
};

const ListingPopularPost: React.FC<ListingPopularPostType> = ({ college, route }) => {
  const router = useRouter();

  return (
    <div className="w-[350px] md:w-full rounded-lg shadow-2xl p-8">
      <div className="flex justify-between items-center p-2 border-b-4">
        <h3 className="text-lg font-bold">{college}</h3>
        <button className="font-bold hover:scale-95" onClick={() => router.push(route)}>
          {'더보기 >'}
        </button>
      </div>
      <div className="mt-3">
        {/* 데이터 구조 나오면 데이터 받은 후 각 게시글 세부 포스팅으로 넘어갈 수 있게 구현 예정 */}
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className="border-b-4 p-2 mt-3 flex items-center justify-between hover:bg-slate-300 hover:rounded-lg cursor-pointer"
          >
            <h3 className="text-lg truncate w-4/5">
              하루만에 디자인 한거치고 만족! 텍스트가 길어지면 뒤에 부분은 안보이게 설정해봐요!
            </h3>
            <p className="text-sm text-slate-500">👁️ 500</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingPopularPost;
