import "./styles/styles.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Product/Product";
import {Routes, Route} from "react-router-dom";
import ProductDetails from "./components/Product/ProductDetails";
import ProductKart from "./components/Kart/ProductKart";
import SecondLevelBanner from "./components/Second Level Banner/SecondLevelBanner";
import CheckoutHandler from "./components/Checkout/CheckoutHandler";
import OrderPlaced from "./components/Order Placed/OrderPlaced";
import HomePage from "./components/Home Page/HomePage";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
