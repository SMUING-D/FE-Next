'use client';

import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type ClientOnlyProps = {
  children: React.ReactNode;
};

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  // const currentPath = router.;
  console.log('router', router);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <SessionProvider>{children}</SessionProvider>;
};

export default ClientOnly;
