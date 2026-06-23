import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctor from "./pages/Doctor";
import Contact from "./pages/contact";
import Appointment from "./pages/Appointment";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
<Route path="/appointment" element={<Appointment />} />
      
      </Routes>

    </BrowserRouter>
  );
}

export default App;