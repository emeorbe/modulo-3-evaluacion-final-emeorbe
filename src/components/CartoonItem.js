import React from 'react';
import {Link} from 'react-router-dom'

const CartoonItem = props =>{
  return(
    <Link to={'/' + props.cartoonId}>
      <div className="cartoon__item">
        <img  className="cartoon__item__img" src={props.cartoonImg} alt={props.cartoonName}/>
        <div className="cartoon__item__container">
        <h2 className="cartoon__item__title" > {props.cartoonName}</h2>
        <p  className="cartoon__item__specie" >{props.cartoonSpecie}</p>
        </div>
      </div>
      
    </Link>
  )
}

export default CartoonItem;