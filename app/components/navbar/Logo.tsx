'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();
  const session = useSession();
  console.log(session.data);
  return (
    <div
      className="font-2xl text-blue-500 font-bold cursor-pointer"
      onClick={() => router.push('/')}
    >
      SMUING
    </div>
  );
};

export default Logo;
