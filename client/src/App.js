import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {ChatPage} from './ChatPage';
import UsernamePrompt from './UsernamePrompt';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsernamePrompt />} />
        <Route path="/chat" element={<ChatPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
