import Home from './components/home/Home'
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import Admin from './components/admin/Admin';

function App() {
  const [admin,setAdmin] = useState(false)
  const [value,setValue] = useState('')

  return (
    <div className="App">
      <Header value={value} setValue={setValue} admin={admin} setAdmin={setAdmin}/>
      <Routes>
        <Route path='/admin' element={<Admin admin={admin} setAdmin={setAdmin}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login  admin={admin} setAdmin={setAdmin}/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/' element={<Home value={value} setValue={setValue} admin={admin} setAdmin={setAdmin}/>}/>
      </Routes>
    </div>
  );
}

export default App;
