'use client';

import { useEffect } from 'react';

export const MSWComponent = (): null => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (process.env.NEXT_PUBLIC_MODE === 'local') {
        require('@/mocks/browser');
      }
    }
  }, []);
  return null;
};
