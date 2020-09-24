import React from 'react'
import  classes from "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom"
import { useStatevalue } from './StateProvider';

function Header() {
    const [{basket},disptch]=useStatevalue();
    return (
        <div className={classes.header}>
            <Link to="/">
            <img className= {classes.header__logo}
            src="https://tse3.mm.bing.net/th?id=OIP.yHurC6Udu7wCGcoxdvxxHgHaDQ&pid=Api&P=0&w=378&h=167"
            alt="logo"/>
            </Link>

            <div className={classes.header__search}>
                <input className={classes.header__searchInput} type="text">
                </input>
                <SearchIcon className={classes.header__searchIcon}/>
            </div>
            
            <div className={classes.header__nav}>
            <Link to="/login">
                <div className={classes.header__option}>
                    <span className={classes.header__optionLineOne}>
                        hello vamshi
                    </span>
                    
                    <span className={classes.header__optionLineTwo}>
                        Sign In  
                    </span> 
                </div>
            </Link> 
                <div className={classes.header__option}>
                    <span className={classes.header__optionLineOne}>
                        Return
                    </span>
                    <span className={classes.header__optionLineTwo}>
                        &Orders  
                    </span>
                </div>
                <div className={classes.header__option}>
                    <span className={classes.header__optionLineOne}>
                        Your
                    </span>
                    <span className={classes.header__optionLineTwo}>
                        Prime 
                    </span>
                </div>
                <Link to="/checkout"> 
                <div className= {classes.header__optionBasket}>
                    
                    <ShoppingBasketIcon></ShoppingBasketIcon>
                   
                    <span className={classes.header__optionLineTwo} className={classes.header__basketCount}>
                        {basket?.length}
                    </span>

                </div>
                </Link>
            </div>
        </div>

    )
}

export default Header
