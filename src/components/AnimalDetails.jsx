// AnimalDetails.js
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

export default function AnimalDetails() {
  const { id } = useParams(); // Get the animal ID from the URL parameters
  const [animal, setAnimal] = useState([]);
  let keeper = '';

  useEffect(() => {
    const getAnimal = async () => {
      try {
        const response = await fetch(`http://localhost:5050/animals/${id}`);
        const data = await response.json();
        setAnimal(data);
      } catch (err) {
        console.log(err);
      }
    };

    getAnimal();
  }, []);

  const keepers = animal.keepers.map(k =>  k + ' '); 
  if (animal.keepers.length > 0){
      keeper = keepers;
  }else{
      keeper = 'None';
  }


  // You can fetch the animal details using the ID here
  // For demonstration purposes, simply display the ID
  return (
    <div>
      <img className='card-img' src={animal.image} alt={animal.name} />
          <h3>{animal.name}</h3>
          <ul>
            <li>Species: {animal.species}</li>
            <li>Family: {animal.family}</li>
            <li>Habitat: {animal.habitat}</li>
            <li>Places Found: {animal.place_of_found}</li>
            <li>Diet: {animal.diet}</li>
            <li>Weight: {animal.weight_kg}kg</li>
            <li>Height: {animal.height_cm}cm</li>
            <li></li>
          </ul>
    </div>
  );
}