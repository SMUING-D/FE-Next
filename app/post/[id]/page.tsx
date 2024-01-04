'use client';

import { useParams } from 'next/navigation';

const PostPage = () => {
  const params = useParams<{ id: string }>();
  return <div>{params.id}</div>;
};

export default PostPage;
