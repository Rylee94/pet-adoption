import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

export default function Profile() {
    return (
        <div>
            <h1>Profile Page</h1>
            {/* <p>Name { me }</p> */}
        </div>
    );
}