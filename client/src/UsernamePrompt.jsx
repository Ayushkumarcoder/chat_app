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
  }
}
