/* eslint-disable @typescript-eslint/no-explicit-any */
// import OktaAuth, { toRelativeUrl } from "@okta/okta-auth-js";
// import { LoginCallback, Security } from "@okta/okta-react";
import React from "react";
// import React, { useCallback, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import { Route, Routes, useNavigate } from "react-router-dom";

// import { getAuth } from "../Auth/OktaAuth";
import Layout from "../Layout";

// import ProtectedRoute from "./ProtectedRoute";

// const oktaAuth = new OktaAuth({
//   issuer: process.env.ISSUER,
//   clientId: process.env.CLIENT_ID,
//   redirectUri: `http://localhost:${process.env.PORT}/login/callback`,
// });

const AuthRoute: React.FC = () => {
  // const navigate = useNavigate();

  // const restoreOriginalUri = useCallback(
  //   (_oktaAuth: any, originalUri: any): void => {
  //     navigate(toRelativeUrl(originalUri || "/", window.location.origin));
  //   },
  //   []
  // );

  // useEffect(() => {
  //   return () => {
  //     oktaAuth.options.restoreOriginalUri = undefined;
  //   };
  // }, []);

  return (
    // <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
    //   <Routes>
    //     <Route path="login/callback" element={<LoginCallback />} />
    //     <Route path="/*" element={<ProtectedRoute />}>
    // <Route path="/*/*" element={<Layout />} />
    //     </Route>
    //   </Routes>
    // </Security>
    <Routes>
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
};

export default AuthRoute;
