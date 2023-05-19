import React from 'react';
import Quotes from './Quotes';
import UserNewQuotes from './UserNewQuotes';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Nav.css'
import Header from './Header';
import Signup from './SignUp';
import SignIn from './SignIn';

function Nav(){
return (
  <Router>
    <div >
      <Header />
      <nav>
        <Link to="/Quotes" className="nav-item">Quotes</Link>
        <Link to="/UserNewQuotes" className="nav-item">UserNewQuotes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Quotes />} />
        <Route path="/Quotes" element={<Quotes />} />
        <Route path="/UserNewQuotes" element={<UserNewQuotes />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </div>
  </Router>
)
}
export default Nav