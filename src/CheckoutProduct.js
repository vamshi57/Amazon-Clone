import React from 'react'
import classes from './CheckoutProduct.css'
import StarIcon from '@material-ui/icons/Star';
import { useStatevalue } from './StateProvider';

function CheckoutProduct({id,image,title,price,rating}) {
 

  const [{basket},dispatch,]=useStatevalue();
  
   const onRemoveItem=(id)=>{
     console.log("onRemove");
    dispatch({
      type:'REMOVE_FROM_BASKET',
      id:id
     })

   }

    return(
        <div className={classes.checkoutProduct}>
          <img className={classes.checkoutProduct__image}  src={image}/> 
          <div className={classes.checkoutProduct__info}>
             <p className={classes.checkoutProduct__title}>{title}</p>
             <p className={classes.checkoutProduct__price}>
                 <small>$</small>
                 <strong>{price}</strong>
             </p>
             <div className={classes.checkoutProduct__rating}>
                    {Array(rating).fill().map((_,i)=>(
                        <StarIcon className={classes.checkoutProduct__rating__star}></StarIcon>
                      )
                    )} 
             </div>
             <button className={classes.checkoutProduct__button}
             onClick={()=>onRemoveItem(id)}>Remove from Basket</button>
          </div>           
        </div>
     )
 }
export default CheckoutProduct