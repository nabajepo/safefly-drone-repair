import { useState } from "react";

function Booking() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(
      "Appointment booked successfully! We will contact you soon."
    );
  };

  return (
    <section id="booking" className="booking-section">
      <div className="container">

        <h2 className="section-title">
          Book an Appointment
        </h2>

        <div className="booking-box">

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">
                Full Name
              </label>

              <input
                type="text"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Select Service
              </label>

              <select className="form-select">
                <option>Drone Repair</option>
                <option>Battery Replacement</option>
                <option>Camera Repair</option>
                <option>Flight Inspection</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">
                Appointment Date
              </label>

              <input
                type="date"
                className="form-control"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Book Appointment
            </button>

          </form>

          {message && (
            <div className="success-message mt-4">
              {message}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default Booking;