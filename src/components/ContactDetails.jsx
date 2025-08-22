import { Phone, Clock, MapPin, User } from "lucide-react";

export default function ContactDetails() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-10">
          For appointments and inquiries, please reach out to{" "}
          <span className="font-semibold">Dr. Salik Kashif</span> through the
          following contact information:
        </p>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-700">Tahir</p>
                <p className="text-gray-600">0333 936 5127</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-700">Haneef</p>
                <p className="text-gray-600">0314 900 6935</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Clock className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-700">Clinic Timings</p>
                <p className="text-gray-600">
                  Monday, Tuesday, Thursday – 4:00 pm to 6:00 pm
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <User className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-700">Need Help?</p>
                <p className="text-gray-600">Our team is here to assist you.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Practice Locations */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">HMC Peshawar</p>
                <p className="text-gray-600">Hayatabad Medical Complex</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">
                  Life Care Hospital and Research Institute
                </p>
                <p className="text-gray-600">
                  Phase 5, Sector A3, Hayatabad Medical Complex, Peshawar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
