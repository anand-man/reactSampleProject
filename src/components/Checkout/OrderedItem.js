import React from "react";
import { useSelector } from "react-redux";

export default function OrderedItem(props) {
  const orederedProduct = useSelector(state => state.kartData.productsInKart);

  const totalItems = orederedProduct && orederedProduct.reduce((currentItem, nextItem) =>{
    return currentItem + nextItem.totalItem
  }, 0)
  return (
    <>
      {props.notification && <div className= {`${props.className}__order-items`}>
        <h5>{totalItems} items in your order</h5>
        {orederedProduct && orederedProduct.map(item => {
          const{title, id, image, totalItem} = item
          return <div key={id} className="product-checkout__order-items--cards">
              <div className="product-checkout__order-items__img-wrapper">
                <img src={image} alt ={title}/>
              </div>
              <div className="product-checkout__order-items__contect-wrapper">
                <p className="product-checkout__order-items--title">{title.slice(0, 20)}</p>
                <p>Size: Medium</p>
                <p>Color: Red</p>
                <p>Quantity: {totalItem}</p>
              </div>
          </div>
        })}
      </div> 
      }</>
  )
}
