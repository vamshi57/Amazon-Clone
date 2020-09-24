import React from 'react'
import classes from './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStatevalue } from './StateProvider'
import {getBasketTotal } from './reducer'

function Subtotal() {
   const [{basket},dispatch] =useStatevalue();

    return (
        <div className={classes.subtotal}>
            <CurrencyFormat
            renderText={(value)=>(
                <div>
                <p>Subtotal ({basket.length} items):<strong>{value}</strong></p>
                <small className={classes.subtotal__gift}>
                    <input type="checkbox"/>This order containes a gift

                </small>
                </div>
            )}


            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            ></CurrencyFormat>
           <button className={classes.subtotal__button}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
