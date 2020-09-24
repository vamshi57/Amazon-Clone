import React from 'react'
import classes from './Checkout.css'
import Subtotal from './Subtotal'

import {Link} from "react-router-dom"
import { useStatevalue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{basket},dispatch,]=useStatevalue();

    return (
        <div className={classes.checkout}>
            <div className={classes.checkout__left}>
                <Link to="/">
                    <img className={classes.checkout__ad}
                    src="https://tse2.mm.bing.net/th?id=OIP.OJIewOTSR-FrRuTwNHuwMwHaA6&pid=Api&P=0&w=540&h=68"
                    alt="add"></img>
                </Link>
                <div>
                    <h2 className={classes.checkout__title}>
                       Your shopping Basket
                    </h2>
                    <div className={classes.checkout__items}>
                    {basket.map(item=>(
                        
                        <CheckoutProduct  
                          id={item.id}
                          image={item.image}
                          title={item.title}
                          price={item.price}
                          rating={item.rating}
                        />
                    ))}
                    </div>
                </div>
            </div>
           
            <div className={classes.checkout__right}>
                <Subtotal></Subtotal>
            </div>
        </div>
    )
}

export default Checkout
