import React, { Component } from 'react';
import Header from'./Header'
import Home from './Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import classes from  './App.css'
import Checkout from './Checkout';
import Login from './Login'



class App extends Component {
  render(){
  return(
    <Router>
    <div className={classes.app}>
   
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
     
        <Route path="/checkout">
           <Header></Header>
          <Checkout></Checkout>
        </Route>
        <Route path="/">
          <Header></Header>
           <Home></Home>
         </Route>
      </Switch>
      
    </div>
    </Router>
  );
  }
}

export default App;
