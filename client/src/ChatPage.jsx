import { useEffect, useState } from 'react';

function ChatPage() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      // If no username is found, redirect back to the username prompt
      window.location.href = '/';
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome, {username}!</h1>
      <p>You are now in the chat room.</p>
    </div>
  );
}

export  default ChatPage;
