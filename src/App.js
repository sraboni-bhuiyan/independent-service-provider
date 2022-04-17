import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Services from './Components/Services/Services';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blog' element={<p>blog</p>}></Route>
        <Route path='/aboutme' element={<p>about me</p>}></Route>
        <Route path='/login' element={<p>login</p>}></Route>
        <Route path='/*' element={<p>not found</p>}></Route>
      </Routes>
    </div>
  );
}

export default App;
