import icon from "../assets/iconP.jpg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">

        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#hero">
          <img src={icon} alt="SafeFly icon" className="nav-logo" />
          SafeFly Drone Repair
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#hero">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#booking">Booking</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;