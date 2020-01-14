import React from 'react';

const CartoonDetail = props =>{
  console.log(props)
  if(props.cartoons === undefined ){
    return <p>Cargando</p>
  }else{

    return(
      <div className="cartoon__detail">
        <img src={props.cartoons.image} alt={props.cartoons.name}/>
        <h1>{props.cartoons.name}</h1>
        <span>{props.cartoons.species}</span>
        <span>{props.cartoons.origin.name}</span>
        <span>{props.cartoons.episode.length}</span>
        <span>{props.cartoons.status}</span> 
      </div>
  )
  }
  
}

export default CartoonDetail;