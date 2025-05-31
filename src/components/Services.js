import React from 'react';

function Services() {
  const services = [
    { title: "Airport Transport", desc: "Seamless airport transfers with reliable service" },
    { title: "Corporate Travels", desc: "Professional car rental for business needs" },
    { title: "Special Events", desc: "Luxury cars for your special occasions" }
  ];

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col text-center">
          <h1>Our Services</h1>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {services.map((service, index) => (
          <div key={index} className="col">
            <div className="card h-100 services-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;