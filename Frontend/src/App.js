import React from 'react';
// import data from './data';
import SignIn from './SignIn';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import './App.css';
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';
import Register from './Register';

function App() {
  const openMenu = () =>{document.querySelector(".sidebar").classList.add("open")}
  const closeMenu= () =>{document.querySelector(".sidebar").classList.remove("open")}
  return (
    <BrowserRouter>

    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <Link to='/'>CShop</Link>
         
        </div>
        <div className="header-links">
        
        <Link to='/SignIn' >Sign In 🔑 </Link>
        
      
          <Link to="/Cart">Cart 🛒</Link>
        </div>
        </header>
        
      
        
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" 
        onClick={closeMenu}>X</button>
        <ul>
          <li><a href="index.html">Pants</a></li>
          <li><a href="index.html">Shirts</a></li>
        </ul>
      </aside>

    
      <main className="main">
        <div className="content">
        <Route path='/product/:id' component={ProductScreen}/>
        <Route path='/'exact={true} component={HomeScreen}/>
        <Route path='/SignIn' component={SignIn}/>
        <Route path='/Register' component={Register}/>
          
           
        </div>
      </main>
      <footer className="footer">All right reserved by "Don't Be Zozo".</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
