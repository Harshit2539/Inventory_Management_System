import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Approve from "./pages/Approve";
import StockInventoryMenu from "./pages/StockInventoryMenu";
import StockDisplay from "./pages/StockDisplay";
import { useState } from 'react'
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';
import CreateUser from "./pages/CreateUser";
import ChangeUser from "./pages/ChangeUser";
import CreateMRS from "./pages/CreateMRS";
import Issue from "./pages/Issue";
import Message from "./pages/Message";
import PMOrderMaterial from "./pages/PMOrderMaterial";
import CartScreen from "./pages/CartScreen ";
import PMOrderTable from "./pages/PMOrderTable";
import MaterialTable from "./pages/MaterialTable";
import CreateNotification from "./pages/CreateNotification";
import ForgotPassword from "./pages/ForgotPassword";
import Users from "./pages/Users";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
           <Route path="Users" element={<Users />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="change-user" element={<ChangeUser />} />
          <Route path="approve" element={<Approve />} />
          <Route path="stock-inventory" element={<StockInventoryMenu />} />
          <Route path="stock-display" element={<StockDisplay />} />
          <Route path="create_mrs" element={<CreateMRS />} />
          <Route path="issue" element={<Issue />} />
          <Route path="message" element={<Message />} />
          <Route path="PMOrder-Material" element={<PMOrderMaterial />} />
          <Route path="cart" element={<CartScreen />} />
          <Route path="PMOrder-Table" element={<PMOrderTable />} />
          <Route path="material-Table" element={<MaterialTable />} />
          <Route path="notification" element={<CreateNotification />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
