import "./App.css";
import Header from "./components/Header";

import Home from "./pages/Home";
import Clothing from "./pages/Clothing";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="mx-12 scrollbar">
          <Routes>
            {/* Home */}
            <Route index element={<Home />} />
            {/* Men's Clothing */}
            <Route path="mens-clothing" element={<Clothing type="M" />} />
            {/* Womens's Clothing */}
            <Route path="womens-clothing" element={<Clothing type="W" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
