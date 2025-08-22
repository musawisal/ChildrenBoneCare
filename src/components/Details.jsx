import { Briefcase, Phone, User, MapPin, BookOpen } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Details() {
  return (
    <section className="bg-white py-12 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Main Headings Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Profile */}
        <div>
          <h3 className="flex items-center text-xl font-semibold mb-3">
            <User className="w-5 h-5 mr-2 text-blue-600" /> Profile
          </h3>
          <p>
            Dr. Salik Kashif, FCPS in Orthopedic Surgery and fellowships in Pediatric Orthopedics, 
            brings a wealth of experience and expertise in pediatric orthopedic care. With fellowships 
            from renowned institutions in Lahore, Malaysia, Turkey, UK, Switzerland, Korea, and Hong Kong, 
            Dr. Kashif is dedicated to providing exclusive, comprehensive and compassionate care to children 
            with bone and joint conditions.
          </p>
          <p className="mt-2">
            Visit our clinic to experience personalized care and expertise for your child's orthopedic needs.
          </p>
        </div>

        {/* Practices at */}
        <div>
          <h3 className="flex items-center text-xl font-semibold mb-3">
            <MapPin className="w-5 h-5 mr-2 text-blue-600" /> Practices At
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>HMC Peshawar</li>
            <li>
              Clinic: Life Care Hospital and Research Institute, Phase 5, Sector A3, 
              Hayatabad Medical Complex, Peshawar
            </li>
          </ul>
        </div>

        {/* Core Competencies */}
        <div>
          <h3 className="flex items-center text-xl font-semibold mb-3">
            <Briefcase className="w-5 h-5 mr-2 text-blue-600" /> Core Competencies
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Paediatric hip pathologies, including hip dysplasia in all ages</li>
            <li>Limb reconstruction for congenital deformities</li>
            <li>Clubfoot and other paediatric foot deformities</li>
            <li>Pediatric trauma</li>
            <li>Skeletal dysplasia</li>
          </ul>
        </div>

        {/* Qualification */}
        <div>
          <h3 className="flex items-center text-xl font-semibold mb-3">
            <BookOpen className="w-5 h-5 mr-2 text-blue-600" /> Qualification
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>MBBS (Bachelor of Medicine, Bachelor of Surgery)</li>
            <li>FCPS (Fellow of the College of Physicians and Surgeons Pakistan) in Orthopedic Surgery</li>
            <li>
              Fellowships in Pediatric Orthopedics from prestigious institutions in Lahore, Malaysia, 
              Turkey, UK, Switzerland, Korea, and Hong Kong
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="flex items-center text-xl font-semibold mb-3">
            <Phone className="w-5 h-5 mr-2 text-blue-600" /> Contact Us
          </h3>
          <p>
            For appointments and inquiries, please reach out to Dr. Salik Kashif through the following contact information:
          </p>
          <p className="mt-2"><strong>Tahir:</strong> <a href="tel:03339365127" className="text-blue-600">03339365127</a></p>
          <p><strong>Haneef:</strong> <a href="tel:03149006935" className="text-blue-600">03149006935</a></p>
          <p className="mt-3">
            Visit us at the <strong>Children Bone Care Clinic</strong> during our clinic timings:
          </p>
          <p className="mt-1">Monday, Tuesday, Thursday – 4:00 pm to 6:00 pm</p>
          <p className="mt-2 font-semibold text-red-500">Need Help?</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-10" />

      {/* Mediclinic Middle East & Socials */}
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-bold text-lg">CHILDREN BONE CARE</h3>
          <p className="mt-2 text-gray-700">
            Children Bone Care Clinic is a dedicated pediatric orthopedic clinic in Peshawar, providing specialized care for children with bone and joint conditions. Led by Dr. Salik Kashif, FCPS in Orthopedic Surgery with international fellowships in Pediatric Orthopedics, the clinic focuses on comprehensive, compassionate, and expert treatment for young patients.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg">FOLLOW US</h3>
          <div className="flex space-x-3 mt-3">
            <a href="#" className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200"><FaFacebookF /></a>
            <a href="#" className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200"><FaYoutube /></a>
            <a href="#" className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
