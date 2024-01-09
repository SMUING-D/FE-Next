type ChangePasswordProps = {
  email: string;
  userPassword: string;
  password: string;
  confirmPassword: string;
};

const changePassword = async ({
  email,
  userPassword,
  password,
  confirmPassword
}: ChangePasswordProps): Promise<boolean> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/change/password`;
  const requestBody = {
    email,
    userPassword,
    password,
    confirmPassword
  };

  const res = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(requestBody)
  });
  if (!res.ok) {
    throw new Error('Faild to fetch data');
  }

  return res.json();
};

export default changePassword;
