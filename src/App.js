import './App.css';
import Contact from './Pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Player from './Pages/Player';
import NavScrollExample from './Component/Appbar';
import Login from './Pages/Login';
import ErrorPage from './Pages/ErrorPage';
function App() {
  return (

    <BrowserRouter>
      <NavScrollExample />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/player' element={<Player />} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//  anchor ❌ Link ✅

// https://www.youtube.com/watch?v=rZpVhwfBiqw