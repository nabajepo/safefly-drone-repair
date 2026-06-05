import services from "../data/services";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>

        <div className="row g-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;