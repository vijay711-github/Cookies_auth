import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import { clearScreenDown } from "readline";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'email', type: 'text', placeholder: '' },
          password: { label: 'password', type: 'password', placeholder: '' },
        },
        async authorize(credentials: any) {
            console.log(credentials);
            return {
              id: "user1",
              name: "vijay",
              email :"vj@gmail.com"
            };
        },
      })
  ],
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }