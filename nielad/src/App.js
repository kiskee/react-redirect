import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Product from "./components/Product";
import ListaUsuarios from "./components/ListaUsuarios";
import Private from "./components/Private";
import Nav from "./components/Nav";
import { useState } from "react";
import Login from './components/Login'
import Add from './components/Add'

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      {Nav()}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/private"
          element={cartItems.length < 1 ? <Navigate to="/" /> : <Private />}
        />
        <Route path="/home" element={<ListaUsuarios />} />
        <Route path="/add" element={<Add />} />
        ;
      </Routes>
    </div>
  );
};
export default App;
