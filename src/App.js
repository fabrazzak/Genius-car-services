
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import FourOFour from './Pages/FourOFour/FourOFour';
import ServicesDetails from './Pages/ServicesDetails/ServicesDetails';
import Signin from './Pages/Signin/Signin';

;

function App() {
  return (
    <div >

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='services/:serviceId' element={<ServicesDetails></ServicesDetails>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signin' element={<Signin></Signin>}></Route>
        <Route path='*' element={<FourOFour></FourOFour>}></Route>
       
      </Routes>
      <Footer></Footer>

    </div>
  )
}



export default App;
