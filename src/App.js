import React, { lazy, Suspense } from "react";
import "./styles/styles.scss";
import {Routes, Route} from "react-router-dom";
import Loader from "./components/commons/Loader";
import ProductKart from "./components/Kart/ProductKart";
import {Header} from "./components/Header/index";
import Footer from "./components/Footer/Footer";
import OrderPlaced from "./components/OrderPlaced/OrderPlaced";
import CheckoutHandler from "./components/Checkout/CheckoutHandler";

const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const SecondLevelBanner = lazy(() => import("./components/SecondLevelBanner/SecondLevelBanner"));
const Products = lazy(() => import("./components/Product/Product"));
const ProductDetails = lazy(() => import("./components/Product/ProductDetails"));

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
