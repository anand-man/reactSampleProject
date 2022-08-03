import React from "react";
import { useSelector } from "react-redux";
import OrderedItem from "../Checkout/OrderedItem";
import Container from "../commons/Container";

export default function OrderPlaced(props) {
  const store = useSelector(state => state.checkoutData.checkoutData);

  const { email, contactNo, firstName, lastName, streetAdd1, streetAdd2, city, countryName, state, zipCode } = store.contactInfo ? store.contactInfo : "";

  console.log(store)
  // const {}

  return (
    <section className="order-placed">
      <Container>
        <h1 className="heading-1">Order Successful!</h1>
        <div className="order-placed__column-wrapper">
          <div className="col-seven">
            <h4>Order Number #1700834</h4>
            <div className="ordered-placed__contact-data">
              <div className="order-placed__contact-data--title">
                <h6>Shipping Information</h6>
              </div>
              <div className="order-placed__contact-data--email-phone">
                <ul>
                  <li>{email}</li>
                  <li>{contactNo}</li>
                </ul>
              </div>
              <div className="order-placed__contact-data--name-address">
                <ul>
                  <li>{firstName} {lastName}</li>
                  <li>{streetAdd1} {streetAdd2}</li>
                  <li>{city}, {state} {zipCode}</li>
                  <li>{countryName}</li>
                </ul>
              </div>
            </div>
            <div className="ordered-placed__shipping-payment">
              <div className="order-placed__shipping-method">
                <div className="order-placed__shipping-data--title">
                  <h6>Shipping Method</h6>
                </div>
                <div className="order-placed__shipping-data--info">
                  <ul>
                    <li>{
                      store.shippingMethod === "standard" && "Standard Shipping" || store.shippingMethod === "express" && "Express Delivery" || store.shippingMethod === "nextDay" && "Next Day Delivery"
                    }</li>
                    <li>{
                      store.shippingMethod === "standard" && "Est. delivery in 4 - 8 business days FREE" || store.shippingMethod === "express" && "Est. delivery in 2-5 business days via USPS" || store.shippingMethod === "nextDay" && "Est. delivery in Next business days via FedEx"
                    }</li>
                  </ul>
                </div>
              </div>
              <div className="order-placed__payment-info">
                <div className="order-placed__payment-data--title">
                  <h6>Payment Information</h6>
                </div>
                <div className="order-placed__payment-data--pay-info">
                  <ul>
                    <li>{store.paymentInfo.info.payType}</li>
                    <li>Visa ending in {store.paymentInfo.info.cardNum.slice(12, 16)}</li>
                  </ul>
                </div>
              </div>
            </div>
            <OrderedItem className="order-placed" notification={true} />
            <div className="order-placed__description">
              <p>You will also receive an email with the details and we will let you know when your order has shipped.</p>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.</p>
            </div>
          </div>
          <div className="col-three">
            <div className="order-placed__saving-info">
              <h2>Give us a follow to SAVE 20% on your next order.</h2>
              <ul className="order-placed__saving-info--social-icon">
              <li><a href="#" className="instagram"><span>instagram</span></a></li>
              <li><a href="#" className="facebook"><span>facebook</span></a></li>
              <li><a href="#" className="twitter"><span>twitter</span></a></li>
             </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
