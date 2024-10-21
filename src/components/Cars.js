import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the car data!', error);
      });
  }, []);

  return (
    <div>
      <h2>Available Cars</h2>
      {cars.length === 0 ? (
        <p>No cars available at the moment.</p>
      ) : (
        <ul>
          {cars.map((car) => (
            <li key={car.id}>
              {car.make} {car.model} ({car.year}) - ${car.price} per day
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cars;
