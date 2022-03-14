import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import Okta from "next-auth/providers/okta";
import OktaProvider from "next-auth/providers/okta";

//Api route function that is returned from next auth
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    OktaProvider({
      clientId: process.env.OKTA_CLIENTID,
      clientSecret: process.env.OKTA_CLIENTSECRET,
      issuer: process.env.OKTA_ISSUER,
      redirectUri: `${process.env.NEXTAUTH_URL}/api/auth/callback/okta`,
      /* authorizationUrl: `https://${process.env.OKTA_ISSUER}/oauth2/default?response_type=code`, */
      /* authorization: { params: { scope: "openid email profile" } },
      authorizationUrl: `https://${process.env.OKTA_ISSUER}/oauth2/default?response_type=code`, */
      /* scopes: ["openid", "profile", "email"],
      ,
      pkce: true, */
      /* authorization: */
    }),
  ],
  //callbacks: {
  // called after sucessful signin
  /* jwt: async ({ token, user }) => {
      if (user) token.id = user.id;
      return token;
    }, // called whenever session is checked
    session: async ({ session, token }) => {
      if (token) session.id = token.id;
      return session;
    }, */
  // eslint-disable-next-line no-unused-vars
  /* signIn: async ({ user, account, profile, email, credentials }) => {
      console.log(user, account);
      return true;
    },
    // eslint-disable-next-line no-unused-vars
    redirect: async ({ url, baseUrl }) => {
      return baseUrl;
    },
    // eslint-disable-next-line no-unused-vars
    session: async ({ session, user, token }) => {
      //return session;
      if (token) session.id = token.id;
      return session;
    },
    // eslint-disable-next-line no-unused-vars
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      //return token;
      if (user) token.id = user.id;
      return token;
    }, */
  //},
});
