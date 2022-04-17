import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register/Register';
import RequireAuth from './RequireAuth/RequireAuth';
import Checkout from './Components/Checkout/Checkout';

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
        <Route path='/*' element={<p>not found</p>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
