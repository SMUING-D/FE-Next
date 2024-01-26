const getUserLikePost = async (userId: number | string) => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/user/like/post/${userId}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  if (res) {
    return res.json();
  } else {
    return null;
  }
};

export default getUserLikePost;
