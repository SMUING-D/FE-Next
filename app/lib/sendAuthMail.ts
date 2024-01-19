const sendAuthMail = async (email: string) => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/auth/email/send/${email}`;
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

export default sendAuthMail;
