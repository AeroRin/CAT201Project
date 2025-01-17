import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import About from "./components/About.jsx";
import Product from "./components/Product.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
