
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KeeperRow from './KeeperRow';
import KeeperDetailsModal from './KeeperDetailsModal';

export default function KeeperList(){
    const [keepers, setKeepers] = useState([]);
    const [selectedKeeper, setSelectedKeeper] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        const fetchKeepers = async () => {
            try {
                const response = await axios.get('https://swanagan-pavielle-zoo-animal-management.onrender.com/keepers');
                setKeepers(response.data);
            } catch (error) {
                console.error('Failed to fetch keepers:', error);
            }
        };

        fetchKeepers();
    }, []);

    const handleSelectKeeper = (keeper) => {
        setSelectedKeeper(keeper);
        setIsModalOpen(true);
    };

    const handleClose = () => setIsModalOpen(false);
    

    return (
        <div>
            <h1>List of Keepers</h1>
        <table>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {keepers.map((keeper) => (
                    <KeeperRow key={keeper.e_id} keeper={keeper} onSelectKeeper={ handleSelectKeeper} />
                ))}
            </tbody>
        </table>
        {selectedKeeper && (
        <KeeperDetailsModal
          isOpen={isModalOpen}
          onClose={handleClose}
          keeper={selectedKeeper}
          
        />
      )}
        
    </div>
    );
}