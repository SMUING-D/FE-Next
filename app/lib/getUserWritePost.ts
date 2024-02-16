const getUserWritePost = async (cursor: number) => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/posts/myPage?cursor=${cursor}`;
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

export default getUserWritePost;
