import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "../pages/DefaultLayout";
import Home from "../pages/home";
import Produtcs from "../pages/Produtcs";
import ErrorHomePage from "../pages/Errors/ErrorHomePage";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<DefaultLayout />}
          errorElement={<ErrorHomePage />}
        >
          <Route path="/" element={<Home />}></Route>
          <Route path="Produtos" element={<Produtcs />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
