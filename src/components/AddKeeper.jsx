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
          const response = await axios.post('http://localhost:5050/keepers/', keeperData);
          console.log(response.data);
          // Handle success (e.g., clear form, show success message)
        } catch (error) {
          console.error('Failed to add keeper:', error);
          // Handle error (e.g., show error message)
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
            <input type="number" name="e_id" value={keeperData.e_id} onChange={handleChange} placeholder="Employee ID" />
          <input type="text" name="name" value={keeperData.name} onChange={handleChange} placeholder="Name" />
          <input type="text" name="username" value={keeperData.username} onChange={handleChange} placeholder="Username" />
          <input type="email" name="email" value={keeperData.email} onChange={handleChange} placeholder="Email" />
          <input type="text" name="address.street" value={keeperData.address.street} onChange={handleChange} placeholder="Street" />
          <input type="text" name="address.city" value={keeperData.address.city} onChange={handleChange} placeholder="City" />
          <input type="text" name="address.zip" value={keeperData.address.zip} onChange={handleChange} placeholder="Zip" />
          <input type="tel" name="phone" value={keeperData.phone} onChange={handleChange} placeholder="Phone" />
          <input type="text" name="animals" value={keeperData.animals[0]} onChange={handleChange} placeholder="Animals" />
          <button type="submit">Add Keeper</button>
        </form>
      );
}