
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimalCard from './AnimalCard'
import '../App.css';

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const getAnimals = async () => {
      try {
        const response = await fetch('http://localhost:5050/animals');
        const data = await response.json();
        setAnimals(data);
      } catch (err) {
        console.log(err);
      }
    };

    getAnimals();
  }, []);

  return (
    <div className="animal-list">
      <h2>Animal List</h2>
      <Link to="/add-animal">
        <button>Add Animal</button>
      </Link>
      <div className="animal-cards">
        {animals.map((animal, index) => (
          <Link key={index} to={`/animals/${animal.animal_id}`}> {/* Add a Link around each Animal Card */}
            <AnimalCard animal={animal} />
          </Link>
        ))}
      </div>
    </div>
  );
}