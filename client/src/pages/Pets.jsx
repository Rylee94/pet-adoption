// src/components/PetList.jsx

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PETS } from '../utils/queries';

const PetList = () => {
    const { loading, error, data } = useQuery(GET_PETS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const petProfiles = data.petProfiles;

    return (
        <div>
            <h2>Pets for Adoption</h2>
            <ul>
                {petProfiles.map((pet) => (
                    <li key={pet._id}>
                        <p>{pet.petName}</p>
                        <p>Type: {pet.petType}</p>
                        <p>Breed: {pet.breed}</p>
                        <p>Age: {pet.age}</p>
                        <p>Gender: {pet.gender}</p>
                        <p>About: {pet.aboutPet}</p>
                        {/* Render other pet fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PetList;
