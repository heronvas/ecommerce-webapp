import logo from './images/grossary.svg';
import './App.css';
import { useState } from 'react';
import {Navbars} from './component/Navbars'
import {Home} from './component/home/Home'
import {Cart} from './component/cart/Cart'
import {BrowserRouter, Route, Switch} from 'react-router-dom';



function App() {

  // eslint-disable-next-line no-undef
  

  return (
    <BrowserRouter className="App">
            <Navbars img={logo}/>
            <Switch>
              <Route exact path="/" component={Home}/> 
            <Route exact path="/cart " component={Cart}/> 
            </Switch>        
    </BrowserRouter>
  );

      

}

export default App;
