import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Quotes from '../Pages/Quotes';
import UserNewQuotes from '../Pages/UserNewQuotes';
import SignIn from '../Pages/SignIn';
import Signup from '../Pages/SignUp';



function RoutesComponent() {
  return (
    
      <Routes>
        <Route path="/" element={<Quotes />} />
        <Route path="/Quotes" element={<Quotes />} />
        <Route path="/UserNewQuotes" element={<UserNewQuotes />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    
  );
}

export default RoutesComponent;
