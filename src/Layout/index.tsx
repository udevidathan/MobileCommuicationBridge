import React from "react";

import MainRoutes from "../Routes/MainRoutes";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import "./Layout.scss";

const Main: React.FC = () => {
  return (
    <div className="shell">
      <Header />
      <div className="mainContent">
        <Sidebar />
        <div className="contents">
          <MainRoutes />
        </div>
      </div>
    </div>
  );
};

export default Main;
