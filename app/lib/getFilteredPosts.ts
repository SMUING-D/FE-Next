type Props = {
  pageParam?: number;
};

export const getFilteredPosts = async (params: string, { pageParam }: Props) => {
  console.log(params, '파람');
  const url = `${process.env.NEXT_PUBLIC_URL}/api/posts?category=${params}&cursor=${pageParam}`;
  // if (params === '') {
  //   url = `${process.env.NEXT_PUBLIC_URL}/api/posts?category=전체`;
  // }

  const res = await fetch(url, {
    // next에서는 tag를 지원, 서버 컴포넌트라, 서버에서는 여기서 받아온 데이터들을 자동으로 저장함. 서버에 캐싱을 안할려면 no-store를 넣어주어야함.
    next: {
      tags: ['posts', params]
    },
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
