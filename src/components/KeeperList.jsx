
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function KeeperList(){
    const [keepers, setKeepers] = useState([]);

    useEffect(() => {
        const fetchKeepers = async () => {
            try {
                const response = await axios.get('http://localhost:5050/keepers');
                setKeepers(response.data);
            } catch (error) {
                console.error('Failed to fetch keepers:', error);
            }
        };

        fetchKeepers();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>E_ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {keepers.map((keeper) => (
                    <tr key={keeper.e_id}>
                        <td>{keeper.e_id}</td>
                        <td>{keeper.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}