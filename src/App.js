import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Services from './Pages/Home/Services/Services';
import Home from './Pages/Home/Home';
import CheckOut from './Pages/CheckOut/CheckOut';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import RequireAuth from './Pages/PrivateRoute/RequireAuth';
import 'react-toastify/dist/ReactToastify.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>}>
        </Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
