import { getServerSession } from 'next-auth';

import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (session?.user?.role === 'ADMIN') {
    return <div>{children}</div>;
  }

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fuga totam repellat
      explicabo sapiente veniam obcaecati provident ad consequuntur doloribus accusantium eveniet
      omnis consectetur, officia id asperiores suscipit alias illo!500
    </div>
  );
}
