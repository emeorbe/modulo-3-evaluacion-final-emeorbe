import React from 'react';
import CartoonItem from './CartoonItem'

const CartoonsList = props =>{
  return(
    <ul>
      {props.cartoonList
      //.filter(cartoon => console.log(cartoon))
        // props.value === '' || cartoon.results.toLowerCase().includes(props.value.toLowerCase()))
      .map(cartoon=>{
        return(
          <li key={cartoon.id}>
            <CartoonItem
              cartoonImg ={cartoon.image}
              cartoonName = {cartoon.name}
              cartoonSpecie={cartoon.species}
              
            />
          </li>
        )
      })}

    </ul>
  )
}


export default CartoonsList;
