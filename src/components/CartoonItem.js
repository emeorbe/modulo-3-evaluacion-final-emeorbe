import React from 'react';
import {Link} from 'react-router-dom'

const CartoonItem = props =>{
  return(
    <Link to={'/' + props.cartoonId}>
    <div>
      <img src={props.cartoonImg} alt={props.cartoonName}/>
      <h2> {props.cartoonName}</h2>
      <span>{props.cartoonSpecie}</span>
    </div>
    </Link>
  )
}

export default CartoonItem;