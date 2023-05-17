import React, { useState } from 'react';

const SignIn = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUserData = JSON.parse(localStorage.getItem('userData')) || [];
    const user = existingUserData.find((user) => user.email === email);

    if (user) {
      if (user.password === password) {
        setError('');
        setEmail('');
        setPassword('');
        handleLogin(user); 
      } else {
        setError('Incorrect password. Please try again.');
      }
    } else {
      setError('Email not found. Please sign up first.');
    }
  };

  
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="label">
        Email:
        <input className="input" type="email" value={email} onChange={handleEmailChange} required />
      </label>
      <br />
      <label className="label">
        Password:
        <input className="input" type="password" value={password} onChange={handlePasswordChange} required />
      </label>
      <br />
      <button className="submit-button" type="submit">Sign In</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default SignIn;
