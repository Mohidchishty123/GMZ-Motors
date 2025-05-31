import React from 'react';

function Pricing() {
  const dailyRates = [
    { name: "Suzuki Alto", price: "Rs.4,000" },
    { name: "Toyota Corolla", price: "Rs.5,000" },
    { name: "Honda Civic", price: "Rs.8,000 - Rs.12,000" },
    { name: "Toyota Fortuner", price: "Rs.14,000 - Rs.25,000" },
    { name: "Land Cruiser V8", price: "Rs.25,000 - Rs.40,000" },
    { name: "Audi A6", price: "Rs.30,000 - Rs.60,000" }
  ];

  const monthlyRates = [
    { name: "Toyota Corolla", price: "Rs.150,000" },
    { name: "Honda Civic", price: "Rs.160,000" },
    { name: "Toyota Revo", price: "Rs.350,000 - Rs.450,000" },
    { name: "Toyota Fortuner", price: "Rs.350,000 - Rs.500,000" }
  ];

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col text-center">
          <h1>Pricing</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Daily Rates</h2>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Vehicle Name</th>
                <th>Rent Per Day</th>
              </tr>
            </thead>
            <tbody>
              {dailyRates.map((vehicle, index) => (
                <tr key={index} style={{ '--row-index': index }}>
                  <td>{vehicle.name}</td>
                  <td>{vehicle.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h2>Monthly Rates (With Driver)</h2>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Vehicle Name</th>
                <th>Rent Per Month</th>
              </tr>
            </thead>
            <tbody>
              {monthlyRates.map((vehicle, index) => (
                <tr key={index} style={{ '--row-index': index }}>
                  <td>{vehicle.name}</td>
                  <td>{vehicle.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Pricing;