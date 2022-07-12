import "./styles/styles.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroBanner from "./components/Hero Banner/HeroBanner";
import Products from "./components/Product/Product";
import {Routes, Route} from "react-router-dom";
import ProductDetails from "./components/Product/ProductDetails";
import ProductKart from "./components/Kart/ProductKart";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path ="/" element={<HeroBanner/>}/>
        <Route path="/products" element= {<><HeroBanner/><Products/></> }/>
        <Route path="/products/:category/:productId" element= {<ProductDetails/>}/>
        <Route path="/kart" element= {<ProductKart/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
