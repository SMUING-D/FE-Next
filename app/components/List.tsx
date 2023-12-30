import { useQuery } from '@tanstack/react-query';
import React from 'react';

import Container from './Container';

const fetchData = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/resource`);
  const data = await response.json();
  return data;
};

const List = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ['projects'], queryFn: fetchData });
  console.log(data);

  return (
    <Container>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <div>{data}</div>}
      <div>여기에 아마 프로젝트</div>
      <h1>모집글같은거 올릴꺼 같습니다</h1>
    </Container>
  );
};

export default List;
