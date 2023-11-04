import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import BabyCloths from "./pages/BabyCloths";
import BabyCare from "./pages/BabyCare";
import Bedding from "./pages/Bedding";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import { createContext, useState } from "react";
import { Products } from "./pages/Product";
import ViewProduct from "./pages/ViewProduct";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Main from "./components/Admin/Main";
import Customers from "./components/Admin/Customers";
import About from "./components/Admin/About";
import AddProducts from "./components/Admin/AddProducts";
import Product from "./components/Admin/Product";
import Edit from "./components/Admin/Edit";
import AdminLogin from "./components/Admin/AdminLogin";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-bootstrap";

export const userContext = createContext();

function App() {
  const [product, setProduct] = useState(Products);
  const [user, setUser] = useState([]);
  const [login, setLogin] = useState(false);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('')

  return (
    <BrowserRouter>
      <userContext.Provider
        value={{
          product,
          setProduct,
          user,
          setUser,
          login,
          setLogin,
          cart,
          setCart,
          search,
          setSearch,
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cloths" element={<BabyCloths />} />
            <Route path="/babycare" element={<BabyCare />} />
            <Route path="/bedding" element={<Bedding />} />
          <Route path="/view/:id" element={<ViewProduct />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/main" element={<Main />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/product" element={<Product />} />
          <Route path="/addproduct" element={<AddProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>
      </userContext.Provider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
