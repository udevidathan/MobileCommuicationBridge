// import { toRelativeUrl } from "@okta/okta-auth-js";
import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { oktaAuth, authState } = useOktaAuth();

  useEffect(() => {
    if (authState && authState.isAuthenticated) {
      setIsAuthenticated(true);
    } else {
      oktaAuth.signInWithRedirect();
    }
  }, []);

  if (!isAuthenticated) {
    return null;
  }

  return <Outlet />;
};

export default ProtectedRoute;
