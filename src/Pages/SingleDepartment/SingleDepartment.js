import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './SingleDepartment.css'
const SingleDepartment = () => {
    const data = useLoaderData();
    const {name, image, desc} = data;
    return (
      <div>
        <div
          className="p-5 text-center bg-dark overlay"
          style={{
            backgroundImage: ` linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${image})`,
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="hero-text ">
          <h5>WE ARE A PRIVATE MEDICAL CLINIC</h5>
          <h1 className="display-1 text-primary" style={{ fontWeight: "bold" }}>
            Professional Medical Care for Your Entire Family
          </h1>
        </div>
      </div>
    );
};

export default SingleDepartment;