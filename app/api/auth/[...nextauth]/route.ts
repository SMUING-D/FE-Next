import axios from 'axios';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface UserData {
  id: string;
  nickname: string;
  image: string;
  token: string;
}

const handler = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials: any): Promise<null | UserData> {
        const { email, password } = credentials;

        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/login`, {
            email: email,
            password: password
          });
          console.log(response);
          if (response) {
            const userData: UserData = {
              id: response.data.id,
              nickname: response.data.nickname,
              image: response.data.image,
              token: response.data.token
            };

            return userData;
          }
          return null;
        } catch (error: any) {
          throw new Error(error?.response?.data.msg);
        }
      }
    })
  ],
  callbacks: {
    // async session({ session, token }: any) {
    //   console.log('session callback is executed');
    //   console.log('session: ', session);
    //   console.log('token: ', token);
    //   session.user = token.user;
    //   return session;
    // }
    // async jwt({ token, user }: any) {
    //   if (user) {
    //     token.id = user.id;
    //     token.email = user.email;
    //   }
    //   return token;
    // }
  },
  pages: {
    signIn: '/'
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30
  }
});

export { handler as GET, handler as POST };
