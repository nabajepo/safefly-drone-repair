function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <h2 className="section-title">
          Contact Us
        </h2>

        <div className="contact-box">

          {/* Address */}
          <div className="contact-item">
            <h4>Address</h4>
            <p>
              75 Laurier Ave E <br />
              Ottawa, ON K1N 6N5
            </p>
          </div>

          {/* Phone */}
          <div className="contact-item">
            <h4>Phone</h4>
            <p>
              +1 (613) 555-0198
            </p>
          </div>

          {/* Email */}
          <div className="contact-item">
            <h4>Email</h4>
            <p>
              contact@safeflyrepair.ca
            </p>
          </div>

          {/* Business Hours */}
          <div className="contact-item">
            <h4>Business Hours</h4>

            <p>
              <strong>Monday - Friday</strong>
              <br />
              8:00 AM - 6:00 PM
            </p>

            <p>
              <strong>Saturday</strong>
              <br />
              9:00 AM - 2:00 PM
            </p>

            <p>
              <strong>Sunday</strong>
              <br />
              Closed
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
