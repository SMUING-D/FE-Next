type Props = {
  pageParam?: number;
};

export const getPostComment = async (postId: string, { pageParam }: Props) => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/posts/comments/${postId}?cursor=${pageParam}`;

  const res = await fetch(url, {
    next: {
      tags: ['comments', postId]
    },
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
