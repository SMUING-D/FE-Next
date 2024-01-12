import NextAuth from 'next-auth';

declare module 'next-auth' {
  NextAuth;
  interface User {
    userId: number;
    name: string;
    email: string;
    role: string;
    image: string;
    accessToken: string;
  }
  interface Session {
    user: User;
  }
}
