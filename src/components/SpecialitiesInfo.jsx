import { Star } from "lucide-react";

// Import videos
import video1 from "../assets/20.mp4";
import video2 from "../assets/19.mp4";

// Import images
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";
import img16 from "../assets/18.jpg";
import img17 from "../assets/17.jpg";


export default function SpecialitiesInfo() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Star className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-blue-700">Specialities</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Dr. Salik Kashif, <strong>FCPS in Orthopedic Surgery</strong> with
            international fellowships in <strong>Pediatric Orthopedics</strong> from
            renowned institutions in Lahore, Malaysia, Turkey, UK, Switzerland, Korea,
            and Hong Kong, brings extensive expertise in <strong>pediatric bone and joint care</strong>.
            He is dedicated to providing exclusive, comprehensive, and compassionate treatment 
            for children with orthopedic conditions.
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            His core competencies include managing <strong>paediatric hip pathologies 
            (including hip dysplasia in all ages), limb reconstruction for congenital 
            deformities, clubfoot and other paediatric foot deformities, pediatric trauma,
            and skeletal dysplasia</strong>.  
            Visit our clinic to experience personalized care and expertise for your child’s 
            orthopedic needs.
          </p>
        </div>

        {/* Video Set (Before & After) */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Video 1 (Before) */}
            <video
              controls
              muted
              autoPlay
              loop
              className="w-full h-64 rounded-xl shadow-md object-cover"
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video 2 (After) */}
            <video
              controls
              muted
              autoPlay
              loop
              className="w-full h-64 rounded-xl shadow-md object-cover"
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Paragraph under the whole set */}
          <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4">
            This comparison shows the patient’s condition before and after the
            treatment. The left video demonstrates the pre-treatment state, while
            the right video highlights the improvements post-treatment.
          </p>
        </div>

        {/* Picture Sets */}
        <div className="space-y-12">
          {/* Set of 2 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              These are the pictures of the patient treated pasted below
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <img src={img16} alt="Patient 1" className="w-full h-64 object-cover rounded-lg shadow" />
              <img src={img17} alt="Patient 2" className="w-full h-64 object-cover rounded-lg shadow" />
            </div>
          </div>

          {/* Set of 3 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              These are the pictures of the patient treated pasted below
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <img src={img13} alt="Patient 3" className="w-full h-64 object-cover rounded-lg shadow" />
              <img src={img14} alt="Patient 4" className="w-full h-64 object-cover rounded-lg shadow" />
              <img src={img15} alt="Patient 5" className="w-full h-64 object-cover rounded-lg shadow" />
            </div>
          </div>

          {/* Another set of 3 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              These are the pictures of the patient treated pasted below
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <img src={img10} alt="Patient 6" className="w-full h-64 object-cover rounded-lg shadow" />
              <img src={img11} alt="Patient 7" className="w-full h-64 object-cover rounded-lg shadow" />
              <img src={img12} alt="Patient 8" className="w-full h-64 object-cover rounded-lg shadow" />
            </div>
          </div>

          {/* Set of 2 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              These are the pictures of the patient treated pasted below
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <img src={img8} alt="Patient 9" className="w-full h-64 object-cover rounded-lg shadow" />
              <img src={img9} alt="Patient 10" className="w-full h-64 object-cover rounded-lg shadow" />
            </div>
          </div>

          {/* Set of 3 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              These are the pictures of the patient treated pasted below
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <img src={img5} alt="Patient 11" className="w-full h-64 object-cover rounded-lg shadow" />
              <img src={img6} alt="Patient 12" className="w-full h-64 object-cover rounded-lg shadow" />
              <img src={img7} alt="Patient 13" className="w-full h-64 object-cover rounded-lg shadow" />
            </div>
          </div>

          {/* Set of 2 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              These are the pictures of the patient treated pasted below
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <img src={img3} alt="Patient 14" className="w-full h-64 object-cover rounded-lg shadow" />
              <img src={img4} alt="Patient 15" className="w-full h-64 object-cover rounded-lg shadow" />
            </div>
          </div>

          {/* Another set of 2 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              These are the pictures of the patient treated pasted below
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <img src={img1} alt="Patient 16" className="w-full h-64 object-cover rounded-lg shadow" />
              <img src={img2} alt="Patient 17" className="w-full h-64 object-cover rounded-lg shadow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
