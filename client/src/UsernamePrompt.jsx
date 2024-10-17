import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UsernamePrompt() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(username.trim()){
      localStorage.setItem('username', username);
      navigate('/chat');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Login to join the chat</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder='username' value={username} 
        onChange={(e)=> setUsername(e.target.value)} 
        style={{ padding: '10px', width: '200px', marginRight: '10px' }}
        />
        <button type='submit' style={{ padding: '10px' }}>Join Chat</button>

      </form>


    </div>
  );
}


export default UsernamePrompt;

