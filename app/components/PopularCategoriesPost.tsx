'use client';

import ListingPopularPost from './listings/ListingPopularPost';

const PopularCategoriesPost = () => {
  return (
    <>
      <div className="mt-[50px] text-2xl font-bold flex items-center gap-3">실시간 게시글</div>
      <div className="font-light text-neutral-500 mt-2 dark:text-white">
        사람들이 가장 관심갖는 게시글을 구경해보세요!
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <ListingPopularPost college={'인문사회과학대학'} route={'/chss'} />
        <ListingPopularPost college={'사범대학'} route={'/coe'} />
        <ListingPopularPost college={'경영경제대학'} route={'/cobe'} />
        <ListingPopularPost college={'융합공과대학'} route={'/coce'} />
        <ListingPopularPost college={'문화예술대학'} route={'/coca'} />
      </div>
    </>
  );
};

export default PopularCategoriesPost;
