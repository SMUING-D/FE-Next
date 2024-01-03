import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface UserData {
  id: string;
  nickname: string;
  image: string;
  token: string;
}

export const authOptions: AuthOptions = {
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials: any): Promise<null | UserData> {
        const authResponse = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: credentials.email,
            password: credentials.password
          })
        });

        if (!authResponse) {
          return null;
        }
        // handlers User
        const user = await authResponse.json();

        return {
          email: user.email,
          name: user.nickname,
          image: user.image,
          ...user //아래의 정보들, 세션
        };
      }
    })
  ],
  // Login을 성공하면 (authorize) => login 성공시 json 정보가 리턴되는거고.
  // token에는
  callbacks: {
    session: async ({ session, token }: any) => {
      console.log('session callback is executed');
      if (token.role && session.user) {
        session.user.role = token.role;
      }
      return session;
    },
    jwt: async ({ token }) => {
      // getUserInfo(token.sub)
      console.log('토큰', token);
      const userInfo = { role: 'ADMIN', token: '123' };
      token.role = userInfo.role;

      // if (!token.sub) return token;

      // const userInfo = { role: 'ADMIN' };

      // if (!userInfo) return token;

      // token.role = userInfo.role;

      return token;
    }
  },
  pages: {
    signIn: '/',
    signOut: '/'
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
