import React, { lazy, Suspense } from "react";
import "./styles/styles.scss";
import {Routes, Route} from "react-router-dom";
import Loader from "./components/commons/Loader";

const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const SecondLevelBanner = lazy(() => import("./components/SecondLevelBanner/SecondLevelBanner"));
const Products = lazy(() => import("./components/Product/Product"));
const ProductDetails = lazy(() => import("./components/Product/ProductDetails"));
const ProductKart = lazy(() => import("./components/Kart/ProductKart"));
const CheckoutHandler = lazy(() => import("./components/Checkout/CheckoutHandler"));
const OrderPlaced = lazy(() => import("./components/OrderPlaced/OrderPlaced"));

function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <Header/>
      <Routes>
        <Route path="/" element= {<HomePage/>}/>
        <Route path="/products" element= {<><SecondLevelBanner/><Products/></> }/>
        <Route path="/products/:category/:productId" element= {<ProductDetails/>}/>
        <Route path="/kart" element= {<ProductKart/>}/>
        <Route path ="/checkout" element = {<CheckoutHandler/>} />
        <Route path ="/order-placed" element = {<OrderPlaced/>} />
      </Routes>
      <Footer/>
    </Suspense>
  );
}

export default App;
