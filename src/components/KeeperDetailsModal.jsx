import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function KeeperDetailsModal({ keeper, onClose, isOpen }) {
  const [editMode, setEditMode] = useState(false);
  
  // Assuming keeper object is always provided. Be cautious of potential null values.
  const id = keeper.e_id;

  const [formData, setFormData] = useState({
    e_id: keeper.e_id,
    name: keeper.name,
    username: keeper.username,
    email: keeper.email,
    address: keeper.address,
    phone: keeper.phone,
    animals: keeper.animals
  });
  useEffect(() => {
    setFormData({
        e_id: keeper.e_id,
        name: keeper.name,
        username: keeper.username,
        email: keeper.email,
        address: keeper.address,
        phone: keeper.phone,
        animals: keeper.animals// Assuming keepers is an array or string you want to edit
    });
  }, [keeper]);
  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5050/keepers/${id}`, formData).then(response => {
        console.log("Update successful", response.data);
        setEditMode(false);
        onClose();
        // refreshKeepers(); // Implement or call refreshKeepers to update the list.
      });
    } catch (error) {
      console.error('Failed to update keeper:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this keeper?')) {
      try {
        await axios.delete(`http://localhost:5050/keepers/${id}`);
        onClose(); // Close modal after delete
        // refreshKeepers(); // Implement or call refreshKeepers to update the list.
      } catch (error) {
        console.error('Failed to delete keeper:', error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    if (keys.length === 1) {
      setFormData(prevState => ({ ...prevState, [name]: value }));
    } else {
      // For nested fields like address.street
      setFormData(prevState => ({
        ...prevState,
        [keys[0]]: {
          ...prevState[keys[0]],
          [keys[1]]: value
        }
      }));
    }
  };

  const handleAnimalChange = (index, value) => {
    setFormData(prevState => ({
      ...prevState,
      animals: prevState.animals.map((animal, i) => i === index ? value : animal)
    }));
  };

  if (!isOpen) return null;

  return (
    <div className='modal'>
      <div className='keeper-modal-content'>
        {editMode ? (
          <form onSubmit={handleSave}>
            <div className='inputs-column'>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
      <input type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Username" />
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
      <input type="text" name="address.street" value={formData.address.street} onChange={handleInputChange} placeholder="Street" />
      <input type="text" name="address.city" value={formData.address.city} onChange={handleInputChange} placeholder="City" />
      <input type="text" name="address.zip" value={formData.address.zip} onChange={handleInputChange} placeholder="Zip" />
      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" />
      {formData.animals.map((animal, index) => (
        <input
          key={index}
          type="text"
          value={animal}
          onChange={(e) => handleAnimalChange(index, e.target.value)}
          placeholder={`Animal #${index + 1}`}
        />
      ))}
        <button type='button' onClick={() => setEditMode(false)}>Cancel</button>
            <button type="submit">Submit</button>
            </div>
          </form>
        ) : (
          <>
          <img src="/placeholder.png" alt="placeholder Image" />
            <h2>Name: {keeper.name}</h2>
            <p>Username: {keeper.username}</p>
            <p>Email: {keeper.email}</p>
            <p>Address: {`${keeper.address.street}, ${keeper.address.city}, ${keeper.address.zip}`}</p>
            <p>Phone: {keeper.phone}</p>
            <p>Animals: {keeper.animals}</p>
            <button onClick={handleEdit}>Edit</button> 
            <button onClick={handleDelete}>Delete</button>
            <button onClick={onClose}>Close</button>
          </>
        )}
       
       
        
      </div>
    </div>
  );
}