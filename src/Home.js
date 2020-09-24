import React from 'react'
import classes from './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className={classes.home}>
         <div className={classes.home__container}>
               <img className={classes.home__image}
               src="http://assets1.ignimgs.com/2016/01/04/2016movies0104161280jpg-c737bd_1280w.jpg" 
               alt=" "/>
               <div className={classes.home__row}>
                    <Product
                       id="100215"
                      title='Zootopia' 
                      price={29.99}
                      image='https://tse4.mm.bing.net/th?id=OIP.7U5Ts8Kf8HVRYjf8Q5hYOwAAAA&pid=Api&P=0&w=300&h=300'
                      rating={5}/>
                      <Product
                       id="100121"
                      title='Avengers' 
                      price={25.99}
                      image='https://tse2.mm.bing.net/th?id=OIP.oDCJ3tGHubQUvqDPVnPPJwAAAA&pid=Api&P=0&w=300&h=300'
                      rating={4}/>
                </div>

              <div className={classes.home__row}>
                <Product
                     id="101121"
                    title='Matrix' 
                    price={35.99}
                    image='https://tse3.mm.bing.net/th?id=OIP.TN48264J0TxFJVNKUlqFlAHaKj&pid=Api&P=0&w=300&h=300'
                    rating={5}/>
                <Product
                      id="1011122"
                    title='End Game' 
                    price={30.99}
                    image='https://tse3.mm.bing.net/th?id=OIP.zuQpFQMyOyyXjlbgCcMR8AHaK5&pid=Api&P=0&w=300&h=300'
                    rating={4}/>
                <Product
                     id="1554122"
                    title='The Maze Runner' 
                    price={15.33}
                    image='https://tse2.mm.bing.net/th?id=OIP.cMw-ZOc0ye-0p5CQeQmeywHaJ4&pid=Api&P=0&w=300&h=300'
                    rating={3}/>    
               </div>
               <div className={classes.home__row}>
                    <Product
                            id="1554512"
                            title='John Wick' 
                            price={20.3}
                            image='https://tse1.mm.bing.net/th?id=OIP.VTW0QG2kb_3nHC5PFYc63wHaLG&pid=Api&P=0&w=300&h=300'
                            rating={4}/>
               </div>
               
          </div>
          
         
        </div>
        
    )
}

export default Home
