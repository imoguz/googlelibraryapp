import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { SearchProvider } from "../context/AuthContext";
import Detail from "../pages/detail/Detail";
import PrivateRouter from "./PrivateRouter";
import { ThemeProvider } from "../context/ThemeContext";

const AppRouter = () => {
  return (
    <SearchProvider>
      <ThemeProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />

            <Route path="detail" element={<PrivateRouter />}>
              <Route path="" element={<Detail />} />
              <Route path=":itemid" element={<Detail />} />
            </Route>

            <Route path="about" element={<PrivateRouter />}>
              <Route path="" element={<About />} />
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </SearchProvider>
  );
};

export default AppRouter;
