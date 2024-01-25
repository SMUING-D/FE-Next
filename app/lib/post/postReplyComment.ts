const postReplyComment = async (
  userId: number,
  reComments: string,
  postId: number,
  commentId: number
) => {
  const url = `${process.env.NEXT_PUBLIC_URL}/comments/${reComments}/comments?userId=${userId}&postId=${postId}&commentId=${commentId}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
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

export default postReplyComment;
