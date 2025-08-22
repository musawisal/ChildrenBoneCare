import { MapPin, Building, ShieldCheck, Users } from "lucide-react";

export default function HospitalsClinics() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Practices At
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Dr. Salik Kashif provides specialized pediatric orthopedic care at the
          following hospitals and clinics. Visit us at a location most
          convenient to you.
        </p>

        {/* Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* HMC */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-start space-x-4">
              <MapPin className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  HMC Peshawar
                </h3>
                <p className="text-gray-600 mt-1">
                  Hayatabad Medical Complex, Peshawar
                </p>
              </div>
            </div>
          </div>

          {/* Clinic */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-start space-x-4">
              <MapPin className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Life Care Hospital & Research Institute
                </h3>
                <p className="text-gray-600 mt-1">
                  Phase 5, Sector A3, Hayatabad Medical Complex, Peshawar
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white p-8 rounded-2xl shadow-md mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Our Clinics?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-3" />
              <h4 className="font-semibold text-gray-700">Trusted Care</h4>
              <p className="text-gray-600 text-sm">
                Specialized pediatric orthopedic expertise with years of
                experience.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Building className="w-10 h-10 text-blue-600 mb-3" />
              <h4 className="font-semibold text-gray-700">Modern Facilities</h4>
              <p className="text-gray-600 text-sm">
                Advanced hospital infrastructure and equipment for best care.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Users className="w-10 h-10 text-blue-600 mb-3" />
              <h4 className="font-semibold text-gray-700">Patient Focused</h4>
              <p className="text-gray-600 text-sm">
                Compassionate, personalized treatment for every child.
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-gray-200 h-64 md:h-96 rounded-2xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.877718493255!2d71.43407637435975!3d33.99567452071748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d910eb66b480e9%3A0xfa40a5151f70aacb!2sLife%20Care%20Hospital%20%26%20Research%20Institute%2C%20Peshawar!5e0!3m2!1sen!2s!4v1755871704601!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
