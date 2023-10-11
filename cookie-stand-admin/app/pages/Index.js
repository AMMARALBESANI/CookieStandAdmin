"use client"

import React, { useState } from 'react';
import LoginForm from '../Components/LoginForm';
import CookieStandAdmin from '../Components/CookieStandAdmin';

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {

    const mockUser = {
      username: 'admin',
      password: 'password',
    };

    
    if (username === mockUser.username && password === mockUser.password) {
      
      setLoggedIn(true);
    } else {
    
      console.log('Authentication failed');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <CookieStandAdmin />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Home;