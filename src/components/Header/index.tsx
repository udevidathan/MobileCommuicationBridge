// import { useOktaAuth } from "@okta/okta-react";
import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header: React.FC = () => {
  // const { oktaAuth } = useOktaAuth();

  const signOut = (): void => {
    // void (async (): Promise<void> => await oktaAuth.signOut())();
  };

  return (
    <div className="header">
      <Link to={""}>Home</Link>
      <Link to={"payments"}>Payments</Link>
      <div onClick={signOut}>
        <p>Sign Out</p>
      </div>
    </div>
  );
};

export default Header;
