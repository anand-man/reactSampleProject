import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../commons/Container";
import ProductOffer from "./ProductOffer";
import { removeItem, increaseItem, decreaseItem } from "../../store/action";

export default function ProductKart() {

  const { productsInKart } = useSelector(state => state.kartData);
  const dispatch = useDispatch();

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
    const kartBtnWrapper = document.querySelector(".kart-btn");
    kartBtnWrapper.classList.toggle("show");
    kartBtnWrapper.childNodes[0].childNodes.forEach((item) => {
      item.addEventListener("click", () => {
        item.parentNode.parentNode.classList.remove("show");
      })
    })
  }

  const removeProductFromKart = (id) => {
    dispatch(removeItem(id));
  }

  const totalPrice = productsInKart.reduce((currentPrice, item) => {
    return currentPrice + (+item.price * +item.totalItem) * 77;
  }, 0)

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
                    <div className="kart-btn">
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
            <h5>Pricing Summary</h5>
            <ul>
              <li>Subtotal <span>&#8377; {totalPrice.toFixed(2)}</span></li>
              <li>Coupon <span>- &#8377; 77.60</span></li>
              <li>Gift Card <span>- &#8377; 100.00</span></li>
              <li>Estimated tax <span>&#8377; 23.28</span></li>
              <li>Estimated shipping <span>FREE</span></li>
              <li>Estimated Total <span>&#8377; {(totalPrice - 54.32 - 100 + 23.28).toFixed(2)}</span></li>
            </ul>
            <h6 className="heading-6 checkout"><span>CHECKOUT</span></h6>
            <h6 className="heading-6 pay-pal"><span>PAY PAL</span></h6>
          </div>
        </div>}
      </Container>
    </section>
  )
}
