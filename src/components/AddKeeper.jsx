import React, { useState } from 'react';
import axios from 'axios';

export default function AddKeeper() {
    const [keeperData, setKeeperData] = useState({
        e_id: '',
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          city: "",
          zip: ""
        },
        phone: "",
        animals: [""]
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes("address.")) {
          const addressKey = name.split(".")[1];
          setKeeperData({
            ...keeperData,
            address: { ...keeperData.address, [addressKey]: value }
          });
        } else if (name === "animals") {
          setKeeperData({
            ...keeperData,
            animals: [value] // This example assumes only one animal, adjust as needed
          });
        } else {
          setKeeperData({ ...keeperData, [name]: value });
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://swanagan-pavielle-zoo-animal-management.onrender.com/keepers/', keeperData);
          console.log(response.data);
          // Handle success (e.g., clear form, show success message)
        } catch (error) {
          console.error('Failed to add keeper:', error);
          // Handle error (e.g., show error message)
        }
      };
    
      return (
        <form onSubmit={handleSubmit} className="form-column">
            <input type="number" required name="e_id" value={keeperData.e_id} onChange={handleChange} placeholder="Employee ID" />
          <input type="text" required  name="name" value={keeperData.name} onChange={handleChange} placeholder="Name" />
          <input type="text" required name="username" value={keeperData.username} onChange={handleChange} placeholder="Username" />
          <input type="email" required name="email" value={keeperData.email} onChange={handleChange} placeholder="Email" />
          <input type="text" required name="address.street" value={keeperData.address.street} onChange={handleChange} placeholder="Street" />
          <input type="text" required  name="address.city" value={keeperData.address.city} onChange={handleChange} placeholder="City" />
          <input type="text"  required name="address.zip" value={keeperData.address.zip} onChange={handleChange} placeholder="Zip" />
          <input type="tel" required name="phone" value={keeperData.phone} onChange={handleChange} placeholder="Phone" />
          <input type="text"  name="animals" value={keeperData.animals[0]} onChange={handleChange} placeholder="Animals" /> {/* I couldn't get around to fixing the ability to add animals but add keeper works as intended without adding animals.          */}
          <button type="submit">Add Keeper</button>
        </form>
      );
}