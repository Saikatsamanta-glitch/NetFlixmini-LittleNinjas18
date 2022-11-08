import './App.css';
import Contact from './Pages/Contact/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Player from './Pages/Player/Player';
import NavScrollExample from './Component/Appbar';
import Login from './Pages/Login/Login';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
function App() {
  return (
    // react spa

    <BrowserRouter>
      <NavScrollExample />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/player/:id/:type' element={<Player />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//  anchor ❌ Link ✅

// https://www.youtube.com/watch?v=rZpVhwfBiqw