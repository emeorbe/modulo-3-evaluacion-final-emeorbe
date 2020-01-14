import React from 'react';
import CartoonItem from './CartoonItem';
import PropTypes from 'prop-types'



const CartoonsList = props =>{
  
  return(
    <ul className="cartoon__container">
      {props.cartoonList
      .filter(cartoon => cartoon.name.toLowerCase().includes(props.value.toLowerCase()))
      .map(cartoon=>{
        return(
            <li className="cartoon__container__list" key={cartoon.id}>
                <CartoonItem
                  cartoonImg ={cartoon.image}
                  cartoonName = {cartoon.name}
                  cartoonSpecie={cartoon.species}
                  cartoonId ={cartoon.id}
                />
            </li>   
        )
        
      })}
          
    </ul>
  )
}


CartoonsList.propTypes ={

  cartoonList: PropTypes.array

}



 export default CartoonsList;
