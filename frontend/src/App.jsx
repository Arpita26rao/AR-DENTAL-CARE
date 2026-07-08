import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import ProtectedRoute from "./pages/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/contact";
import Appointment from "./pages/Appointment";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import Doctor from "./pages/Doctor";

function Layout() {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/admin" ||
    location.pathname === "/admin-login";
  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/doctor" element={<Doctor />} />
       
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
