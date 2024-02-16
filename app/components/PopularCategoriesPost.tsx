'use client';

import { useEffect, useState } from 'react';

import { getAllPost } from '../lib/getAllPost';
import ListingPopularPost from './listings/ListingPopularPost';

const PopularCategoriesPost = () => {
  const [categoriesPosts, setCategoriesPosts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllPost();
      if (res) {
        setCategoriesPosts(res.result.categories);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="mt-[50px] text-2xl font-bold flex items-center gap-3">실시간 게시글</div>
      <div className="font-light text-neutral-500 mt-2 dark:text-white">
        사람들이 가장 관심갖는 게시글을 구경해보세요!
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <ListingPopularPost
          college={'인문사회과학대학'}
          route={'/chss'}
          posts={categoriesPosts?.SOCIETY?.posts}
        />
        <ListingPopularPost
          college={'사범대학'}
          route={'/coe'}
          posts={categoriesPosts?.EDUCATE.posts}
        />
        <ListingPopularPost
          college={'경영경제대학'}
          route={'/cobe'}
          posts={categoriesPosts?.ECONOMY.posts}
        />
        <ListingPopularPost
          college={'융합공과대학'}
          route={'/coce'}
          posts={categoriesPosts?.ENGINEERING.posts}
        />
        <ListingPopularPost
          college={'문화예술대학'}
          route={'/coca'}
          posts={categoriesPosts?.ART.posts}
        />
      </div>
    </>
  );
};

export default PopularCategoriesPost;
