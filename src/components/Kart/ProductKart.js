import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../commons/Container";
import ProductOffer from "./ProductOffer";
import { removeItem, increaseItem, decreaseItem } from "../../store/action";
import Pricing from "./Pricing";
import { useNavigate } from "react-router";

export default function ProductKart() {

  const { productsInKart } = useSelector(state => state.kartData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onIncreaseItem = (id) => {
    const item = document.getElementById("productQuantity").textContent;
    const productIndex = productsInKart.findIndex((item) => (item.id === id));
    if (+item < productsInKart[productIndex].maxItem) {
      dispatch(increaseItem(id));
    }
  }

  const onDecreaseItem = (id) => {
    const item = document.getElementById("productQuantity").textContent;
    if (+item > 1) {
      dispatch(decreaseItem(id));
    }
  }

  const moreOption = () => {
    const kartBtnWrapper = document.querySelector(".kart-option");
    kartBtnWrapper.classList.toggle("show");
    kartBtnWrapper.childNodes[0].childNodes.forEach((item) => {
      item.addEventListener("click", () => {
        item.parentNode.parentNode.classList.remove("show");
      })
    })
  }

  const removeProductFromKart = (id) => {
    if(!window.confirm("Do you really want to remove this product?")){ return};
    dispatch(removeItem(id));
  }

  return (
    <section className="product-kart">
      <Container>
        <h1 className="heading-1">Your Shopping Bag</h1>
        { productsInKart.length === 0 ? <p className="no-products">You have not any products in Kart. Please shop now.</p> : <div className="column-wrapper">
          <div className="col-six">
            {productsInKart.length > 0 && productsInKart.map(item => {
              const { id, image, title, totalItem, price } = item;
              return <div key={id} className="card">
                <div  className="mobile-option" onClick={moreOption}><span>...</span></div>
                <div className="img-wrapper"><img src={image} alt={title} /></div>
                <div className="content-wrapper">
                    <h5>{title.slice(0, 20)}</h5>
                    <div className="product-description">
                      <p>Size: Medium</p>
                      <p>Color: Storm</p>
                      <p>&#8377; {(price * 77).toFixed(2)}</p>
                    </div>
                    <div className="product-kart">
                      <div className="wrapper">
                        <span className={totalItem > 1 ? "decrease" : "decrease disabled"} onClick={()  => onDecreaseItem(id)}>-</span>
                        <p id="productQuantity">{totalItem}</p>
                        <span className={totalItem < 10 ? "increase" : "increase disabled"} onClick={() => onIncreaseItem(id)}>+</span>
                      </div>
                    </div>
                    <div className="kart-option">
                      <ul>
                        <li className="edit">Edit item</li>
                        <li className="remove" onClick={() => removeProductFromKart(id)}>Remove</li>
                        <li className="save-later">Save for later</li>
                      </ul>
                    </div>
                  </div>
              </div>
            })
            }
            <ProductOffer/>
          </div>
          <div className="col-four">
            <Pricing/>
            <div className="kart-btn kart-btn-with-icon" onClick={() => navigate("/checkout")}><span>CHECKOUT</span></div>
            <div className="kart-btn pay-pal"><span>PAY PAL</span></div>
          </div>
        </div>}
      </Container>
    </section>
  )
}
