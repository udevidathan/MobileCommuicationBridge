import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="payments" element={<h1>Payments</h1>} />

      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};

export default MainRoutes;
