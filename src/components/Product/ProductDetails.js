import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {getKartNotification, getSingleProduct } from "../../store/action";
import Container from "../commons/Container";
import Input from "../commons/Input";
import Slider from "../commons/slider/Slider";

export default function ProductDetails() {

  const store = useSelector(state => state.productData);
  const dispatch = useDispatch();
  const { productId } = useParams();

  // const singleProductData = store.products ? store.products[productId] : store.product;

  // console.log(singleProductData)
  
  const { id, image, price, title, category, rating, description } = store.product;
  const { colorAttr, sizeAttr } = store.productAttr;
  const [cartItem, setCartItem] = useState({
    initialItem: 1,
    totalItem: 1,
    isIncrease: false,
    isDecrease: false,
    maxItem: 10,
    product: []
  });

  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);

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

  const sizeColor = category === "women's clothing" || category === "men's clothing" ? true : false;

  const ratingClass = rating && rating.rate === 3 ? "rating star-3" : "rating" || rating.rate >= 3.1 ? "rating star-3.5" : "rating" || rating.rate === 4 ? "rating star-4" : "rating" || rating.rate >= 4.1 ? "rating star-4.5" : "rating" || rating.rate === 2 ? "rating star-2" : "rating" || rating.rate >= 2.5 ? "rating star-2.5" : "rating";

  return (
    <section className="product-details">
      <Container>
        {id > 0 && <>
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
              <div className="product-description">
                <h3>{title.slice(0, 20)}...</h3>
                <h5>&#8377; {(price * 77).toFixed(2)}</h5>
                <div className={ratingClass}><span>{rating && rating.rate} ({rating && rating.count})</span></div>
                <p>{description.slice(0, 100)}...</p>
              </div>
              <div className="product-attribute">
                {sizeColor  &&  <> <div className="product-color">
                  <h5>Color</h5>
                  {colorAttr.map(item => {
                    const { color, id} = item;
                    return <Input key={id} input={{ id: color, type: "radio", name: "color" }} className="wrapper" label={color}></Input>
                  })}
                </div>
                <div className="product-size">
                  <h5>Size</h5>
                  {sizeAttr.map(item => {
                    const { size, id } = item;
                    return <Input key={id} input={{ id: size, type: "radio", name: "size" }} className="wrapper" label={size} />
                  })}
                </div> </>}
                <div className="product-kart">
                  <h5>Quantity</h5>
                  <div className="wrapper">
                    <span className={cartItem.totalItem > 1 ? "decrease" : "decrease disabled"} onClick={onDecreaseItem}>-</span>
                    <p id="productQuantity">{cartItem.totalItem}</p>
                    <span className={cartItem.totalItem < 10 ? "increase" : "increase disabled"} onClick={onIncreaseItem}>+</span>
                  </div>
                  <div className="kart-btn"  onClick={() => onAddtoKart(id)}>
                    <h6 className="heading-6"><span>ADD TO CART</span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-wrapper">
            <h3 className="title">{title}</h3>
            <div className="col-six">
              <h5>Description</h5>
              <p>{description}</p>
            </div>
            <div className="col-four">
              <h5>Details</h5>
              <ul>
                <li><span>Sweat-wicking</span></li>
                <li><span>Breathable</span></li>
                <li><span>Lightweight fabric</span></li>
                <li><span>69% nylon, 31% lycra</span></li>
              </ul>
            </div>
          </div>
        </>
        }
      </Container>
    </section>
  )
}
