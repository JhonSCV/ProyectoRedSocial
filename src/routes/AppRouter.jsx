import {Route, Routes} from "react-router-dom";
import { NavbarApp } from "../components/NavbarApp";
import { LoginPage, RegisterPage } from "../pages/index";
import React from 'react'

export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={ <NavbarApp /> }>
            <Route index element={ <LoginPage /> } />
            <Route path="register" element={ <RegisterPage /> } />
        </Route>
    </Routes>
    </>
  )
}
