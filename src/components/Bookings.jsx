import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    age: "",
    gender: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateObj = new Date(formData.date + "T" + formData.time);
    const now = new Date();

    // Prevent past bookings
    if (dateObj < now) {
      alert("You cannot book an appointment in the past.");
      return;
    }
    const day = dateObj.getDay(); // 1 = Monday, 2 = Tuesday, 4 = Thursday
    const hour = dateObj.getHours();
    const minutes = dateObj.getMinutes();

    if (![1, 2, 4].includes(day)) {
      alert("Appointments are only available on Monday, Tuesday, and Thursday.");
      return;
    }
    if (hour < 16 || (hour === 18 && minutes > 0) || hour > 18) {
      alert("Appointments are only available between 4:00 pm and 6:00 pm.");
      return;
    }

    // Send email via EmailJS
    emailjs
      .send(
        "service_5ntzw3n",   // Replace with your EmailJS service ID
        "template_3du5rt6",  // Replace with your EmailJS template ID
        {
          to_email: "wisalmusa00@gmail.com",
          patient_name: formData.name,
          contact: formData.contact,
          age: formData.age,
          gender: formData.gender,
          appointment: `${formData.date} at ${formData.time}`,
        },
        "zj51wKqD9xRTy9Heq" // Replace with your EmailJS user ID (public key)
      )
      .then(() => {
        alert("Appointment booked successfully!");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send booking. Try again later.");
      });
  };

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Book Appointment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          {/* Date + Time Picker */}
          <div className="flex space-x-2">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-1/2 p-3 border rounded-lg"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-1/2 p-3 border rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
}
