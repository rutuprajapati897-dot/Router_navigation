import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <h1 className="bg-blue-700 text-white text-3xl font-bold text-center p-5">
          React Router Navigation
        </h1>

        <Navbar />

        <div className="max-w-3xl mx-auto bg-white mt-8 p-8 rounded-xl shadow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;