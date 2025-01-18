import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage.jsx';
import About from './components/About.jsx';
import Product from './components/Product.jsx';
import SignUp from './components/SignUp.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import Login from './components/Login.jsx';

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
