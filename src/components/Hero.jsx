import DoctorImg from "../assets/doctor.jpg"; // import doctor image

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start justify-start px-12 py-16 bg-gray-50">
      {/* Doctor Image */}
      <div className="flex-shrink-0">
        <img
          src={DoctorImg}
          alt="Doctor"
          className="rounded-full w-72 h-72 object-cover object-top border-4 border-white shadow-lg"
        />
      </div>

      {/* Doctor Info */}
      <div className="md:ml-12 mt-8 md:mt-0 max-w-2xl text-left">
        <h1 className="text-3xl font-bold text-gray-800">
          Dr. Salik Kashif
        </h1>

        <div className="mt-6">
          <h3 className="text-gray-600 font-semibold">Specialities</h3>
          <div className="mt-2 text-blue-600 font-medium space-y-2">
            <a href="#">Orthopaedics</a>
            <br /> <br />
            <a href="#">Paediatrics</a>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-gray-600 font-semibold">Languages</h3>
          <p className="text-gray-700">English, Urdu, Pashto</p>
        </div>
      </div>
    </section>
  );
}
