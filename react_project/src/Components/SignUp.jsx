import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUserData = JSON.parse(localStorage.getItem('userData')) || [];
    const isEmailUnique = existingUserData.every(user => user.email !== email);
    if (!isEmailUnique) {
      setError('Email already exists. Please enter a new email.');
      return;
    }
    const newUser = {
      name,
      email,
      password
    };
    const updatedUserData = [...existingUserData, newUser];
    localStorage.setItem('userData', JSON.stringify(updatedUserData));
    setName('');
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} required />
        {error && <span className="error-message">{error}</span>}
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} required />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
