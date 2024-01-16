import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../components/Pages/HomePage.jsx";
import LoginPage from "../components/Pages/LoginPage.jsx";
import ProfilePage from "../components/Pages/ProfilePage.jsx";
import ItemListPage from "../components/Pages/ItemListPage.jsx";
import ItemDetailPage from "../components/Pages/ItemDetailPage.jsx";
import { LoginContext } from "../context/LoginContext/LoginContext.jsx";

export default function AppRoutes() {

      const { isAuthenticated } = useContext(LoginContext)

      const PrivateRoutes = ({ children }) => {

            return isAuthenticated ? children : <Navigate to="/PFAlvarez-React/login" />

      }

      const PublicRoutes = ({ children }) => {

            return !isAuthenticated ? children : <Navigate to="/PFAlvarez-React" />

      }

      return (
            <Routes>

                  <Route path="/PFAlvarez-React/login" element={
                        <PublicRoutes>
                              <LoginPage />
                        </PublicRoutes>
                  } />

                  <Route path="/PFAlvarez-React" element={
                        <PrivateRoutes>
                              <HomePage />
                        </PrivateRoutes>
                  } />

                  <Route path="/PFAlvarez-React/profile" element={
                        <PrivateRoutes>
                              <ProfilePage />
                        </PrivateRoutes>
                  } />

                  <Route path="/PFAlvarez-React/:sId" element={
                        <PrivateRoutes>
                              <ItemListPage />
                        </PrivateRoutes>
                  } />

                  <Route path="/PFAlvarez-React/:cId/:p_id" element={
                        <PrivateRoutes>
                              <ItemDetailPage />
                        </PrivateRoutes>
                  } />

                  <Route path="*" element={<Navigate to="/PFAlvarez-React" />} />

            </Routes>
      );

}