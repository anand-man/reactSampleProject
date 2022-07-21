import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate, useParams } from "react-router-dom";
import {getKartNotification, getSingleProduct } from "../../store/action";
import Container from "../commons/Container";
import Loader from "../commons/Loader";
import Slider from "../commons/slider/Slider";

export default function ProductDetails() {

  const store = useSelector(state => state.productData);
  const dispatch = useDispatch();
  const param = useParams();
  const navigate = useNavigate();
  
  const { id, image, price, title, category, rating, description } = store.product;
  const [cartItem, setCartItem] = useState({
    initialItem: 1,
    totalItem: 1,
    isIncrease: false,
    isDecrease: false,
    maxItem: 10,
    product: []
  });

  useEffect(() => {
    dispatch(getSingleProduct(param.productId));
  }, [dispatch, param.productId]);

  const onIncreaseItem = (item) => {
    item = document.getElementById("productQuantity").textContent;
    if(+item < cartItem.maxItem){
      setCartItem(prevItem => ({
        ...prevItem,
        totalItem: +item + cartItem.initialItem
      }));
    }
  }

  const onDecreaseItem = (item) => {
    item = document.getElementById("productQuantity").textContent;
    if(+item > cartItem.initialItem){
      setCartItem(prevItem => ({
        ...prevItem,
        totalItem: +item - cartItem.initialItem
      }));
    }
  }

  const onAddtoKart = () => {
    const product = {
      ...store.product,
      maxItem: cartItem.maxItem,
      totalItem: cartItem.totalItem
    }
    dispatch(getKartNotification(product));
  }

  const ratingClass = rating && rating.rate === 3 ? "rating star-3" : "rating" || rating.rate >= 3.1 ? "rating star-3.5" : "rating" || rating.rate === 4 ? "rating star-4" : "rating" || rating.rate >= 4.1 ? "rating star-4.5" : "rating" || rating.rate === 2 ? "rating star-2" : "rating" || rating.rate >= 2.5 ? "rating star-2.5" : "rating";

  return (
    <section className="product-details">
      {+id !== +param.productId  ? <Loader/> : <Container>
          <div className="column-wrapper">
            <div className="col-six">
              <div className="img-wrapper">
                <div className="navigation-img-wrapper">
                  <Slider dataSlider = {Array.from({ length: 5 })} image = {image}/>
                </div>
                <div className="product-img">
                  <img src={image} alt={title}/>
                </div>
              </div>
            </div>
            <div className="col-four">
            <div className="breadcrumb"><span className="product" onClick={() => navigate("/")}>Products</span><span>/</span>
            <span>{param.category}</span></div>
              <div className="product-description">
                <h3>{title}</h3>
                <h5>&#8377; {(price * 77).toFixed(2)}</h5>
                <div className={ratingClass}><span>{rating && rating.rate} ({rating && rating.count})</span></div>
                <p>{description.slice(0, 100)}...</p>
              </div>
              <div className="product-attribute">
                <div className="product-kart">
                  <h5>Quantity</h5>
                  <div className="wrapper">
                    <span className={cartItem.totalItem > 1 ? "decrease" : "decrease disabled"} onClick={onDecreaseItem}>-</span>
                    <p id="productQuantity">{cartItem.totalItem}</p>
                    <span className={cartItem.totalItem < 10 ? "increase" : "increase disabled"} onClick={onIncreaseItem}>+</span>
                  </div>
                  <div className="kart-btn"  onClick={() => {onAddtoKart(id); navigate("/kart")}}>
                    <span>ADD TO CART</span>
                  </div>
                  <div className="wish-btn">
                    <ul>
                      <li className="save">Save</li>
                      <li className="share">Share</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-wrapper">
            <div className="col-six">
            <div className="title"><h3>{title}</h3></div>
              <h5>Description</h5>
              <p>{description}</p>
            </div>
          </div>
      </Container>}
    </section>
  )
}
