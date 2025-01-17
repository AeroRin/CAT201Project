import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
