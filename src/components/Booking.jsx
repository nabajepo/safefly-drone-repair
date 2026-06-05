import { useState } from "react";

function Booking() {
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    service: "Drone Repair",
    date: "",
  });

  const [confirmed, setConfirmed] = useState(false);

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });

    setConfirmed(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <section id="booking" className="booking-section">
      <div className="container">
        <h2 className="section-title">Book an Appointment</h2>

        <div className="booking-box">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={booking.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={booking.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Select Service</label>
              <select
                name="service"
                className="form-select"
                value={booking.service}
                onChange={handleChange}
              >
                <option>Drone Repair</option>
                <option>Battery Replacement</option>
                <option>Camera Repair</option>
                <option>Flight Inspection</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Appointment Date</label>
              <input
                type="date"
                name="date"
                className="form-control"
                value={booking.date}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Book Appointment
            </button>
          </form>

          {confirmed && (
            <div className="success-message mt-4">
              <h5>Appointment confirmed!</h5>
              <p className="mb-1">
                <strong>Name:</strong> {booking.name}
              </p>
              <p className="mb-1">
                <strong>Service:</strong> {booking.service}
              </p>
              <p className="mb-0">
                <strong>Date:</strong> {booking.date}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Booking;