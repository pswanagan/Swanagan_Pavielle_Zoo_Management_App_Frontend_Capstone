import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function AnimalDetailModal ({ isOpen, onClose, animal})  {
  
    const [editMode, setEditMode] = useState(false);
    const  id = animal.animal_id;

    const [formData, setFormData] = useState({
        species: animal.species,
        family: animal.family,
        habitat: animal.habitat,
        place_of_found: animal.place_of_found,
        diet: animal.diet,
        weight_kg: animal.weight_kg,
        height_cm: animal.height_cm,
        description: animal.description,
        keepers: animal.keepers // Assuming keepers is an array or string you want to edit
      });

      
  
    const handleEdit = () => {
      setEditMode(true);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
      };
    const handleSave = async (e) => {
      e.preventDefault();
      try {
        await axios.patch(`http://localhost:5050/animals/${id}`, formData)
        .then(response => {
            console.log("Update successful", response.data);
            setEditMode(false);
            onClose();
          
          })
      } catch (error) {
        console.error('Failed to update animal:', error);
      }
    };
  
    const handleDelete = async () => {
      if (window.confirm('Are you sure you want to delete this animal?')) {
        try {
          await axios.delete(`http://localhost:5050/animals/${id}`);
          onClose(); // Close modal after delete
        
        } catch (error) {
          console.error('Failed to delete animal:', error);
        }
      }
    };
  
  
    if (!isOpen) return null;
const keepers = animal.keepers.map(k => k + ' ');
const keeper = animal.keepers.length > 0 ? keepers : 'None';
  return (
    <div className='modal'>
      {editMode ? (
        <div className='inputs-column'>
        <img className='card-img' src={animal.image} alt={animal.name} /><h2>{animal.name}</h2><form onSubmit={handleSave}>
                  {/* Form fields for animal details, pre-populated with editedAnimal state */}
                  <label>Species:
                      <input type="text" name="species" value={formData.species} onChange={handleChange} />
                  </label>
                  <label>Family:
                      <input type="text" name="family" value={formData.family} onChange={handleChange} />
                  </label>
                  <label>Habitat:
                      <input type="text" name="habitat" value={formData.habitat} onChange={handleChange} />
                  </label>
                  <label>Places Found:
                      <input type="text" name="place_of_found" value={formData.place_of_found} onChange={handleChange} />
                  </label>
                  <label>Diet:
                      <input type="text" name="diet" value={formData.diet} onChange={handleChange} />
                  </label>
                  <label>Weight (kg):
                      <input type="number" name="weight_kg" value={formData.weight_kg} onChange={handleChange} />
                  </label>
                  <label>Height (cm):
                      <input type="number" name="height_cm" value={formData.height_cm} onChange={handleChange} />
                  </label>
                  <label>Description:
                      <textarea name="description" value={formData.description} onChange={handleChange} />
                  </label>
                  <label>Keepers:
                      <input type="text" name="keepers" value={formData.keepers} onChange={handleChange} />
                  </label>
                  <button type="submit">Save Changes</button><button type='button' onClick={() => setEditMode(false)}>Cancel</button>
              </form></div>
  ) : (
    <>
       <div className="animal-details">
    <img className='card-img' src={animal.image} alt={animal.name} />
    <h2>{animal.name}</h2>
    <ul>
      <li>Species: {animal.species}</li>
      <li>Family: {animal.family}</li>
      <li>Habitat: {animal.habitat}</li>
      <li>Places Found: {animal.place_of_found}</li>
      <li>Diet: {animal.diet}</li>
      <li>Weight: {animal.weight_kg}kg</li>
      <li>Height: {animal.height_cm}cm</li>
      <li>Description: <p>{animal.description}</p></li>
      <li>Keepers: {keeper}</li>
    </ul>
  </div>
  <div className="buttons-container">
    <button onClick={handleEdit}>Edit</button>
    <button onClick={handleDelete}>Delete</button>
    <button onClick={onClose}>Close</button>
  </div>
    </>
  )}
  
    </div>
  );
};


