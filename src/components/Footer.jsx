import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <h2 className="text-xl font-bold text-white">ChlidrenBoneCare</h2>
          <p className="mt-3 text-sm text-gray-400">
            Providing world-class healthcare services with compassion and
            professionalism across our hospitals and clinics.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/appointment" className="hover:text-white">Book Appointment</Link></li>
            <li><Link to="/hospitals" className="hover:text-white">Hospitals & Clinics</Link></li>
            <li><Link to="/specialities" className="hover:text-white">Specialities</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">
            📍 Life Care Hospital, Hayatabad, Peshawar
          </p>
          <p className="text-gray-400 text-sm">📞 +92 333 9365127</p>
          <p className="text-gray-400 text-sm">✉️ salik_kashif@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ChlidrenBoneCare. All rights reserved.
      </div>
    </footer>
  );
}
