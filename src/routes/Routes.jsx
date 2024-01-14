import { Routes, Route, Navigate } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer.jsx";
import Carousel from "../components/Carousel/Carousel.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Register from "../components/Users/Register/Register.jsx";
import Login from "../components/Users/Login/Login.jsx";
import Profile from "../components/Users/Profile/Profile.jsx";

export default function AppRoutes() {

      return (
            <Routes>
                  <Route path="/PFAlvarez-React" element={
                        <>
                              <Register />
                              <Login />
                              <Profile />
                              <Carousel prop="Aqui va el carousel" />
                              <ItemListContainer />
                              <Footer />
                        </>
                  } />
                  <Route path="/PFAlvarez-React/:sId" element={
                        <>
                              <ItemListContainer />
                              <Footer />
                        </>
                  } />
                  <Route path="/PFAlvarez-React/:cId/:p_id" element={
                        <>
                              <ItemDetailContainer />
                              <Footer />
                        </>
                  } />
                  <Route path="*" element={<Navigate to="/PFAlvarez-React" />} />
            </Routes>
      );

}