import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import CustomerInfo from "./components/CustomerInfo";
import Header from "./components/Header";
import OrderInfo from "./components/OrderInfo";
import ProductList from "./components/ProductList";

//var arrow = "<";
function App({ employee }) {
  return (
    <div className="site-container">
      <Header employee={employee} />
      <CustomerInfo employee={employee} />
      <OrderInfo employee={employee} />
      <ProductList employee={employee} />
    </div>
  );
}

export default App;
