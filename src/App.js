import './App.css';
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./Components/LandingPage";
import "./App.css";
import { Mystery_Page } from "./Components/Mystery";
import { Mythology_page } from "./Components/Mythology";
import { Technology_Page } from "./Components/Technology";
import {History_Page} from "./Components/History";

function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mystery" element={<Mystery_Page />} />
        <Route path="/mythology" element={<Mythology_page />} />
        <Route path="/technology" element={<Technology_Page />} />
        <Route path="/history" element={<History_Page />} />
      </Routes>
   </>
  );
}

export default App;
