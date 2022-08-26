import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
//import Header from './components/Header';
import HomePage from './components/HomePage';
import AuthorizationPage from './components/AuthorizationPage';
import RegistrationPage from "./components/RegistrationPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let isAuthorized = (localStorage.getItem('profile')) ? true : false

  return (
    <BrowserRouter>
      <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<HomePage/>} path="/" exact/>
          </Route>
          <Route path="/login" element={ isAuthorized ? <Navigate to="/" /> :  <AuthorizationPage />} />
          <Route path="/register" element={ isAuthorized ? <Navigate to="/" /> : <RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
