import { useState } from "react";
import {Link} from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import Logo from "../assets/logo.jpg";  // import logo from assets

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-3 bg-white shadow-sm">
      {/* Logo */}
      <Link to="/">
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Mediclinic Logo" className="h-16 w-auto" />
        <span className="text-lg font-semibold text-blue-600">
          ChlidrenBoneCare
        </span>        
      </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link to="/appointment" className="hover:text-blue-600">Book appointment</Link>
        <Link to="/hospitals" className="hover:text-blue-600">Hospitals & Clinics</Link>
        <Link to="/specialities" className="hover:text-blue-600">Specialities</Link>
      </nav>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        <Menu
        className="w-6 h-6 text-gray-700 cursor-pointer"
        onClick={() => setIsOpen(true)}
        />

      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <X
            className="w-6 h-6 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col space-y-4 p-6 font-medium">
          <Link to="/appointment" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700">
            Book appointment
          </Link>
          <Link to="/hospitals" className="px-4 py-2 bg-gray-100 rounded-lg text-center hover:bg-gray-200">
            Hospitals & Clinics
          </Link>
          <Link to="/specialities" className="px-4 py-2 bg-gray-100 rounded-lg text-center hover:bg-gray-200">
            Specialities
          </Link>
          <Link to="/contact" className="px-4 py-2 bg-gray-100 rounded-lg text-center hover:bg-gray-200">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
