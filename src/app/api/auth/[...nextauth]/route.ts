import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const oauthoptions = {
  providers: [
    GoogleProvider({
      clientId:
        process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,
    }),
  ],
};

const authhandler = NextAuth(oauthoptions);
export { authhandler as GET, authhandler as POST };
