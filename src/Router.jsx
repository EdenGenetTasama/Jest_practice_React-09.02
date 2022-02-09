import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import Navbar from "./Components/Navbar/navbar";
import Shoes from "./Components/Shoes/shoes";
import Pants from "./Components/Pants/pants";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        {/* <Link to="/shoe"><button type="button">Shoes</button></Link> */}
        <Route path="/" element={<Home />} />
        <Route path="/shoe" element={<Shoes />} />
        <Route path="/pants" element={<Pants />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
