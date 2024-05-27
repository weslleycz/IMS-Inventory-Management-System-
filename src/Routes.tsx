import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";

export const AppRouters = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
};
