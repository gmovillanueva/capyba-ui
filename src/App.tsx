import { Outlet, Route, Routes } from "react-router-dom";

import { routesLanding } from "@/routes/routesLanding";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Outlet />}>{routesLanding}</Route>
      </Routes>
    </>
  );
}
