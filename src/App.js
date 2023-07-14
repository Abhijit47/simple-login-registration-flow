import './App.css';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';
function App() {
  // eslint-disable-next-line
  const [loginUser, setLoginUser] = useState({});
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={loginUser && loginUser.loginStatus ? <Home /> : <Login setLoginUser={setLoginUser} />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>

  );
}

export default App;
