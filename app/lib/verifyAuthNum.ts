const verifyAuthNum = async (email: string, authNum: string) => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/auth/email/verify?email=${email}&authNum=${authNum}`;
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

export default verifyAuthNum;
