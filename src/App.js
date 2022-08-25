import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import Header from './components/Header';
import HomePage from './components/HomePage';
import Auth from './components/Auth';

function App() {
  return (
    <BrowserRouter>
      <Header/>  
      <Routes>
          <Route element={<PrivateRoutes />}>
              <Route element={<HomePage/>} path="/" exact/>
          </Route>
          <Route path="/login" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
