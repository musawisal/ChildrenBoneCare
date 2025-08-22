import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import Hospitals from "./pages/Hospitals";
import Appointment from "./pages/Appointment";
import Specialities from "./pages/Specialities";

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/specialities" element={<Specialities />} />
        </Routes>
    </BrowserRouter>
  );
}