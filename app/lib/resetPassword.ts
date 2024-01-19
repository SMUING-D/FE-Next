type ResetPasswordProps = {
  email: string;
  password: string;
  confirmPassword: string;
};

const resetPassword = async ({
  email,
  password,
  confirmPassword
}: ResetPasswordProps): Promise<boolean> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/reset/password`;
  const requestBody = {
    email,
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

export default resetPassword;
