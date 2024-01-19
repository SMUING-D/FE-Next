const getUserWritePost = async (userId: number | string) => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/user/write/post/${userId}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Faild to fetch data');
  }

  if (res) {
    return res.json();
  } else {
    return null;
  }
};

export default getUserWritePost;
