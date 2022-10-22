import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleDepartment = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h3>hello</h3>
        </div>
    );
};

export default SingleDepartment;