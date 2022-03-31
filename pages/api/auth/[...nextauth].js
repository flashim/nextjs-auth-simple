import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import OktaProvider from "next-auth/providers/okta";

//Api route function that is returned from next auth
export default NextAuth({
  providers: [
    /* GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }), */
    OktaProvider({
      clientId: "0oa4g7tr50xcI1Ubp5d7",
      clientSecret: "1BgX1LjtagLz_t1hauEbEF2GaCucoh_PwZdQn9u_",
      issuer: "https://dev-92563953.okta.com/oauth2/default",

      /* clientId: process.env.OKTA_CLIENT_ID,
      clientSecret: process.env.OKTA_CLIENT_SECRET,
      issuer: process.env.OKTA_ISSUER, */
      /* redirectUri: `http://localhost:3000/api/auth/callback`, */
      /* authorizationUrl: `https://${process.env.OKTA_ISSUER}/oauth2/default?response_type=code`, */
      /* authorization: { params: { scope: "openid email profile" } },
      authorizationUrl: `https://${process.env.OKTA_ISSUER}/oauth2/default?response_type=code`, */
      /* scopes: ["openid", "profile", "email"],
      ,
      pkce: true, */
      /* authorization: */
    }),
  ],
  callbacks: {
    // called after sucessful signin
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },

    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    // eslint-disable-next-line no-unused-vars
    // signIn: async ({ user, account, profile, email, credentials }) => {
    //   console.log(user, account);
    //   return true;
    // },
    // // eslint-disable-next-line no-unused-vars
    // redirect: async ({ url, baseUrl }) => {
    //   return baseUrl;
    // },
    // // eslint-disable-next-line no-unused-vars
    // session: async ({ session, user, token }) => {
    //   //return session;
    //   if (token) session.id = token.id;
    //   return session;
    // },
    // // eslint-disable-next-line no-unused-vars
    // jwt: async ({ token, user, account, profile, isNewUser }) => {
    //   //return token;
    //   if (user) token.id = user.id;
    //   return token;
    // },
  },
});
