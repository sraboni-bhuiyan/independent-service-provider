import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Services from './Components/Services/Services';
import Register from './Components/Register/Register/Register';
import RequireAuth from './Components/Register/RequireAuth/RequireAuth';
import Checkout from './Components/Checkout/Checkout';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Register/Login/Login';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blog' element={<p>blog</p>}></Route>
        <Route path='/aboutme' element={<p>about me</p>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
