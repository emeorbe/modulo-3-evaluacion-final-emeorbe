import React from 'react';
import {Link} from 'react-router-dom'

const CartoonDetail = props =>{
  console.log(props)
  if(props.cartoons === undefined ){
    return <p>Cargando</p>
  }else{
    
    return(
      <div className="cartoon__detail">
        <img className="cartoon__detail__photo" src={props.cartoons.image} alt={props.cartoons.name}/>
        <h1 className="cartoon__detail__title">{props.cartoons.name}</h1>
        <span className="cartoon__detail__features">{props.cartoons.species}</span>
        <span className="cartoon__detail__features">{props.cartoons.origin.name}</span>
        <span className="cartoon__detail__features">{props.cartoons.episode.length}</span>
        <span className="cartoon__detail__features">{props.cartoons.status}</span> 
        <div className="back">
          <Link className="link" to="/">Volver</Link>
        </div>
      </div>
     
        
      
      
      
  )
  }
  
}

export default CartoonDetail;