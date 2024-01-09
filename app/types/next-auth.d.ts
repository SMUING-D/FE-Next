import NextAuth from 'next-auth';

declare module 'next-auth' {
  NextAuth;
  interface Session {
    user: {
      userId: number;
      name: string;
      email: string;
      role: string;
      accessToken: string;
    };
  }
}
