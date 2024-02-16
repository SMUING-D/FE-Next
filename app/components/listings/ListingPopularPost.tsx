'use client';

import { useRouter } from 'next/navigation';

type ListingPopularPostType = {
  college: string;
  route: string;
  posts: [];
};

const ListingPopularPost: React.FC<ListingPopularPostType> = ({ college, route, posts }) => {
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
        {posts && posts.length > 0 ? (
          posts.map((data, index) => (
            <div
              key={index}
              className="border-b-4 p-2 mt-3 flex items-center justify-between hover:bg-slate-300 hover:rounded-lg cursor-pointer"
            >
              <h3 className="text-lg truncate w-4/5">{data?.content}</h3>
              <p className="text-sm text-slate-500">{data?.viewCount}</p>
            </div>
          ))
        ) : (
          <p className="text-lg truncate w-4/5 text-slate-500">게시글이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default ListingPopularPost;
