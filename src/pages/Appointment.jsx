import Header from "../components/Header";
import Footer from "../components/Footer";
import Bookings from "../components/Bookings";


export default function Appointment() {
  return (
    <div className="font-sans">
      <Header />
      <Bookings />
      <Footer />
    </div>
  );
}