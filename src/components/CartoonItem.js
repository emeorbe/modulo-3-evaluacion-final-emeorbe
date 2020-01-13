import React from 'react';

const CartoonItem = props =>{
  return(
    <div>
      <img src={props.cartoonImg} alt={props.cartoonName}/>
      <h2> {props.cartoonName}</h2>
      <span>{props.cartoonSpecie}</span>
    </div>
  )
}

export default CartoonItem;