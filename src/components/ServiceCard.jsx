function ServiceCard({ title, description, image }) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="service-card h-100">
        <img src={image} alt={title} className="service-img" />
        <div className="service-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;