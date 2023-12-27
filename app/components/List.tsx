import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchData = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/resource`);
  const data = await response.json();
  return data;
};

const List = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ['projects'], queryFn: fetchData });

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <div>{data}</div>}
    </div>
  );
};

export default List;
