
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
import CheackOut from './Pages/CheackOut/CheackOut';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import AddService from './Pages/AddService/AddService';
import Manage from './Pages/Manage/Manage';

;

function App() {
  return (
    <div >

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='services/:serviceId' element={<ServicesDetails></ServicesDetails>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signin' element={<Signin></Signin>}></Route>
        <Route path='checkout' element={
          <RequireAuth>
            <CheackOut></CheackOut>
          </RequireAuth>
        }></Route>
        <Route path='add-service' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
        <Route path='manage' element={
          <RequireAuth>
            <Manage></Manage>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<FourOFour></FourOFour>}></Route>
       
      </Routes>
      <Footer></Footer>

    </div>
  )
}



export default App;
