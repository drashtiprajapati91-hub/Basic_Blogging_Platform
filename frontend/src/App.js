import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </Router>
    
  );
}

export default App;
