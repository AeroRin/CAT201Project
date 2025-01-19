import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage.jsx';
import About from './components/About.jsx';
import Product from './components/Product.jsx';
import SignUp from './components/SignUp.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import Login from './components/Login.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' index element={<MainPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
