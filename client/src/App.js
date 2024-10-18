import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import UsernamePrompt from './UsernamePrompt';
import ChatPage from './ChatPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsernamePrompt />} />
        <Route path="/chat" element={<ChatPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
