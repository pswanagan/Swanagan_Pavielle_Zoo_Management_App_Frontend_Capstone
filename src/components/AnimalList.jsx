
import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';

import AnimalCard from './AnimalCard';
import AnimalDetailModal from './AnimalDetailModal';
import '../App.css';

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  
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

  const handleCardClick = (animal) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  const handleClose = () => setIsModalOpen(false);
 

  
  return (
    <div className="animal-list">
      <h2>Animal List</h2>
      <Link to="/addanimal">
        <button>Add Animal</button>
      </Link>
     <br />
     <br />
        {animals.map((animal) => (
          <div className="animal-cards" key={animal.id} onClick={() => handleCardClick(animal)} >
            <AnimalCard animal={animal} />
            </div>
        ))}
       {selectedAnimal && (
        <AnimalDetailModal
          isOpen={isModalOpen}
          onClose={handleClose}
          animal={selectedAnimal}
          
        />
      )}
    </div>
  );
}