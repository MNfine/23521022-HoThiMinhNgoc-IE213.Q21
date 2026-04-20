import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ login }) {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    login(username);
    navigate('/movies');
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <br />
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div style={{ marginTop: '8px' }}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
