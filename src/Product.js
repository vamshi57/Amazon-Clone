import React from 'react'
import classes from './Product.css'
import StarIcon from '@material-ui/icons/Star';
import { useStatevalue } from './StateProvider';

function Product({id,title,image,price,rating}) {
    const [{basket},dispatch] =useStatevalue();
    
    const addToBasket=()=>{
    //dispatch the action to datalayer

    console.log("this is the baskt >>>",basket);

    dispatch({
        type:'ADD_TO_BASKET',
        item:{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating
        }
    })
}
    return (
        <div className={classes.product}>
            <div className={classes.product__info}>
                <p>{title}</p>
                <p className={classes.product__price}>
                        <small>$</small>
                     <strong>{price}</strong>
                </p>
                <div className={classes.product__rating}>
                    {Array(rating).fill().map((_,i)=>
                        <StarIcon className={classes.product__rating__star}></StarIcon>
                    )}
                    
                </div>
            </div>
            <img 
             src={image} 
            alt="zootopia"></img>

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
