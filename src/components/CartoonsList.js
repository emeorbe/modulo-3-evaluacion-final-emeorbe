import React from 'react';
import CartoonItem from './CartoonItem'

const CartoonsList = props =>{
  return(
    <ul>
      {props.cartoonList.map(cartoon=>{
        return(
        <CartoonItem
          cartoonImg ={cartoon.image}
          cartoonName = {cartoon.name}
          cartoonSpecie={cartoon.species}
        />
        )
      })}

    </ul>
  )
}


export default CartoonsList;
