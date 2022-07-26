import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Pricing() {

  const { productsInKart } = useSelector(state => state.kartData);
  const navigate = useNavigate();

  const totalPrice = productsInKart.reduce((currentPrice, item) => {
    return currentPrice + (+item.price * +item.totalItem) * 77;
  }, 0);

  return (
    <React.Fragment>
      <h5>Pricing Summary</h5>
        <ul>
          <li>Subtotal <span>&#8377; {totalPrice.toFixed(2)}</span></li>
          <li>Coupon <span>- &#8377; 77.60</span></li>
          <li>Gift Card <span>- &#8377; 100.00</span></li>
          <li>Estimated tax <span>&#8377; 23.28</span></li>
          <li>Estimated shipping <span>FREE</span></li>
          <li>Estimated Total <span>&#8377; {(totalPrice - 54.32 - 100 + 23.28).toFixed(2)}</span></li>
        </ul>
        <div className="kart-btn checkout" onClick={() => navigate("/checkout")}><span>CHECKOUT</span></div>
        <div className="kart-btn pay-pal"><span>PAY PAL</span></div>
    </React.Fragment>
  )
}
