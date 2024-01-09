import { FieldValues } from 'react-hook-form';

const editUserInfo = async (token: string, data: FieldValues) => {
  console.log(data);
  const url = `${process.env.NEXT_PUBLIC_URL}/api/edit/user/info`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw new Error('Faild to fetch data');
  }

  return res.json();
};

export default editUserInfo;