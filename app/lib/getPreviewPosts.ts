export const getPreviewPosts = async () => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/preview/posts`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
