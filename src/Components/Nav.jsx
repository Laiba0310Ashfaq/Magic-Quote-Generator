import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Nav.css'
import Header from './Header';


function Nav(){
return (
  
    <div >
      <Header />
      <nav>
        <Link to="/Quotes" className="nav-item">Quotes</Link>
        <Link to="/UserNewQuotes" className="nav-item">User Quotes</Link>
      </nav>
    </div>
  
)
}
export default Nav