// import React from 'react'

// const Login_task = () => {
//   return (
//     <div>
//     <input type ='Email' placeholder='E-mail'/><br/>
//     <input type="password" placeholder='password'/><br/>
//     </div>
//   )
// }

// export default Login_task

import React, { useState } from 'react';

const Login_task = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.email && credentials.password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      <center>
      <h2>Login</h2>
      
      {isLoggedIn ? (
        <div>
          <h3>Welcome back!</h3>
          <p>Logged in successfully as {credentials.email}</p>
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email Address: </label>
            <input 
              type="email" 
              name="email" 
              value={credentials.email} 
              onChange={handleChange} 
              required 
              placeholder="admin@example.com"
            />
          </div>
          <br />

          <div>
            <label>Password: </label>
            <input 
              type="password" 
              name="password" 
              value={credentials.password} 
              onChange={handleChange} 
              required 
              placeholder="••••••••"
            />
          </div>
          <br />

          <button type="submit">Sign In</button>
        </form>
      )}
      </center>
    </div>
  );
};

export default Login_task;