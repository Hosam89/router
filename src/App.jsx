import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import { Home, Add, Contact, Articel } from "./pages/index";
import "./bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<Add />} />

          <Route path="/articles/:id" element={<Articel />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
