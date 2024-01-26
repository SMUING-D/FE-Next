const sendAuthMail = async (email: string) => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/auth/email/send?email=${email}`;
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

export default sendAuthMail;
