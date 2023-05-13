import { Route, Routes } from "react-router-dom";
import { NavbarApp } from "../components/NavbarApp";
import { LoginPage, RegisterPage } from "../pages/index";
import { PrivateRoutes } from "./PrivateRoutes";
import { UserRoutes } from "./UserRoutes";

export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={ <NavbarApp /> }>
            <Route index element={ <LoginPage /> } />
            <Route path="register" element={ <RegisterPage /> } />
            <Route path="logged/*" element={
              <PrivateRoutes>
                <UserRoutes />
              </PrivateRoutes>
            } />
        </Route>
    </Routes>
    </>
  )
}
