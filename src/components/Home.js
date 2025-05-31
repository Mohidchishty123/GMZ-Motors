import React, { useState, useEffect } from 'react';

function Home() {
  const vehicles = [
    { name: "Toyota Land Cruiser V8", img: require('../images/landcruiser.jpg') },
    { name: "Toyota Prado", img: require('../images/prado.jpg') },
    { name: "Honda Civic 2024", img: require('../images/civic.jpg') },
    { name: "Audi A6", img: require('../images/audi.jpg') },
    { name: "Toyota Fortuner", img: require('../images/fortuner.jpg') },
    { name: "Toyota Revo", img: require('../images/revo.jpg') }
  ];

  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 2500); // Popup visible for 2.5 seconds
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {showPopup && (
        <div className="popup-backdrop">
          <div className="welcome-popup">
            <h2>Welcome to GMZ Motors!</h2>
            <p>Your premier car rental service in Lahore</p>
          </div>
        </div>
      )}
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col text-center">
            <h1>Welcome to GMZ Motors</h1>
            <h4>Premier Car Rental Services in Lahore</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2 className="mb-4">Featured Vehicles</h2>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="col">
              <div className="card h-100" style={{ animationDelay: `${index * 0.2}s` }}>
                <img src={vehicle.img} className="card-img-top" alt={vehicle.name} style={{ animationDelay: `${index * 0.3}s` }} />
                <div className="card-body text-center">
                  <h5 className="card-title">{vehicle.name}</h5>
                  <a href="/booking" className="btn btn-primary">Rent Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;