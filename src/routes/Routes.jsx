import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../components/Pages/HomePage.jsx";
import LoginPage from "../components/Pages/LoginPage.jsx";
import ProfilePage from "../components/Pages/ProfilePage.jsx";
import ItemListPage from "../components/Pages/ItemListPage.jsx";
import ItemDetailPage from "../components/Pages/ItemDetailPage.jsx";


export default function AppRoutes() {

      return (
            <Routes>
                  <Route path="/PFAlvarez-React" element={<HomePage />} />
                  <Route path="/PFAlvarez-React/login" element={<LoginPage />} />
                  <Route path="/PFAlvarez-React/profile" element={<ProfilePage />} />
                  <Route path="/PFAlvarez-React/:sId" element={<ItemListPage />} />
                  <Route path="/PFAlvarez-React/:cId/:p_id" element={<ItemDetailPage />} />
                  <Route path="*" element={<Navigate to="/PFAlvarez-React" />} />
            </Routes>
      );

}