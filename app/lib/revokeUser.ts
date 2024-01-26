const revokeUser = async (token: string) => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/user/revoke`;
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  if (res) {
    return res.json();
  } else {
    return null;
  }
};

export default revokeUser;
