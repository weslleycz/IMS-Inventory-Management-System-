import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { Splash } from "./screens/Splash";

export const AppRouters = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
};
