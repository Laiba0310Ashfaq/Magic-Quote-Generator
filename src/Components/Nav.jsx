import React from 'react';

import UserNewQuotes from '../Pages/UserNewQuotes';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../CSS/Nav.css'
import Header from './Header';
import Quotes from '../Pages/Quotes';
import SignIn from '../Pages/SignIn';
import Signup from '../Pages/SignUp';

function Nav(){
return (
  <Router>
    <div >
      <Header />
      <nav>
        <Link to="/Quotes" className="nav-item">Quotes</Link>
        <Link to="/UserNewQuotes" className="nav-item">User Quotes</Link>
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