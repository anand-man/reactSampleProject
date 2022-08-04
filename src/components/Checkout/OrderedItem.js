import React from "react";

export default function OrderedItem(props) {

  const totalItems = props.data && props.data.reduce((currentItem, nextItem) =>{
    return currentItem + nextItem.totalItem
  }, 0);
 
  return (
    <>
      {props.notification && <div className= {`${props.className}__order-items`}>
        <h5>{totalItems} items in your order</h5>
        {props.data && props.data.map(item => {
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
