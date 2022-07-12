import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.js";
import Coding from "./pages/Coding/Coding.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/coding' element={<Coding />}/>
      </Routes>
    </BrowserRouter>
  )
}