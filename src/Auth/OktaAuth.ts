import OktaAuth, { OktaAuthOptions } from "@okta/okta-auth-js";

export const getAuth = (): OktaAuth => {
  const config = (): OktaAuthOptions => {
    const issuer = process.env.ISSUER;
    const clientId = process.env.CLIENT_ID;
    const redirectUri = `http://localhost:${process.env.PORT}/login/callback`;

    return {
      issuer,
      clientId,
      redirectUri,
    };
  };

  const initOkta = new OktaAuth(config());

  return initOkta;
};
