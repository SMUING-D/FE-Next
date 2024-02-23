'use client';

import { useEffect, useState } from 'react';

import { getAllPost } from '../lib/getAllPost';
import { CATEGORIES_DTO } from '../types';
import ListingPopularPost from './listings/ListingPopularPost';

const PopularCategoriesPost = () => {
  const [categoriesPosts, setCategoriesPosts] = useState<CATEGORIES_DTO>();

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
      <div className="mt-[50px] text-2xl font-bold flex items-center gap-3 pl-3">실시간 게시글</div>
      <div className="font-light text-neutral-500 dark:text-white p-3">
        사람들이 가장 관심갖는 게시글을 구경해보세요!
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <ListingPopularPost
          college={'인문사회과학대학'}
          route={'/society'}
          posts={categoriesPosts?.SOCIETY?.posts}
        />
        <ListingPopularPost
          college={'사범대학'}
          route={'/educate'}
          posts={categoriesPosts?.EDUCATE.posts}
        />
        <ListingPopularPost
          college={'경영경제대학'}
          route={'/economy'}
          posts={categoriesPosts?.ECONOMY.posts}
        />
        <ListingPopularPost
          college={'융합공과대학'}
          route={'/engineering'}
          posts={categoriesPosts?.ENGINEERING.posts}
        />
        <ListingPopularPost
          college={'문화예술대학'}
          route={'/art'}
          posts={categoriesPosts?.ART.posts}
        />
      </div>
    </>
  );
};

export default PopularCategoriesPost;
