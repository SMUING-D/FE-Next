const getUserInfo = async (token: string, userId: number | string) => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/user/info/${userId}`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw new Error('Faild to fetch data');
  }

  if (res) {
    return res.json();
  } else {
    return null;
  }
};

export default getUserInfo;
