import React, { useState } from 'react';
import axios from 'axios';

export default function AddAnimal(){
   // Initialize state for each form field
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    family: "",
    habitat: "",
    place_of_found: "",
    diet: "",
    description: "",
    weight_kg: 0,
    height_cm: 0,
    image: '/placeholder.png',
    keepers: []
  });
  const handleAddKeeper = (e) => {
    const newKeeper = e.target.value; // Assuming you have an input field for new keeper
    if (e.key === 'Enter' && newKeeper) { // Example: add keeper on pressing Enter
      setFormData({ ...formData, keepers: [...formData.keepers, newKeeper] });
      e.target.value = ''; // Reset the input field after adding
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      await axios.post('http://localhost:5050/animals/', formData);
      alert('Animal added successfully!');
      // Reset the form state (optional)
      setFormData({
        animal_id: "",
        name: "",
        species: "",
        family: "",
        habitat: "",
        place_of_found: "",
        diet: "",
        description: "",
        weight_kg: 0,
        height_cm: 0,
        image: "",
        keepers: []
      });
    } catch (error) {
      console.error('Failed to add animal:', error);
      alert('Failed to add the animal. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add New Animal</h2>
      <form onSubmit={handleSubmit}>
        {/* Repeat this pattern for each field you have */}
        <label>Animal ID:
                      <input type="number" name="animal_id" required value={formData.animal_id} onChange={handleChange} />
                  </label>
        <label>
          Name:
          <input type="text" name="name" required value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Species:
          <input type="text" name="species" required value={formData.species} onChange={handleChange} />
        </label>
        <label>Family:
                      <input type="text" required name="family" value={formData.family} onChange={handleChange} />
                  </label>
                  <label>Habitat:
                      <input type="text" name="habitat"  required value={formData.habitat} onChange={handleChange} />
                  </label>
                  <label>Places Found:
                      <input type="text" name="place_of_found" required value={formData.place_of_found} onChange={handleChange} />
                  </label>
                  <label>Diet:
                      <input type="text" name="diet" value={formData.diet} required onChange={handleChange} />
                  </label>
                  <label>Description:
                      <textarea name="description" value={formData.description} required onChange={handleChange} />
                  </label>
                  <label>Weight (kg):
                      <input type="number" name="weight_kg" required value={formData.weight_kg} onChange={handleChange} />
                  </label>
                  <label>Height (cm):
                      <input type="number" name="height_cm" value={formData.height_cm} required onChange={handleChange} />
                  </label>
                 
                  <label>
         Image:
          <input type="text" name="image" disabled value={formData.image} onChange={handleChange} />
        </label>
        <label>
  Keepers (Press Enter to add):
  <input type="text" onKeyPress={handleAddKeeper} />
</label>
<ul>
  {formData.keepers.map((keeper, index) => (
    <li key={index}>{keeper}</li>
  ))}
</ul>

        <button type="submit">Add Animal</button>
      </form>
    </div>
  );
}