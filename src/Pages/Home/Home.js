import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Departments from '../Departments/Departments';
import Row from "react-bootstrap/Row";
import './Home.css';
import { Button } from 'react-bootstrap';
const Home = () => {
  const departments = useLoaderData();
    return (
      <div className="relative">
        <header style={{ paddingLeft: 0 }}>
          <div
            className="p-5 text-center bg-image"
            style={{
              backgroundImage: "url('https://i.ibb.co/YDMdSGq/home-img-1.jpg')",
              height: "38rem",
              backgroundPosition: "top-center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="hero-text ">
              <h5>WE ARE A PRIVATE MEDICAL CLINIC</h5>
              <h1 className="display-1" style={{ fontWeight: "bold" }}>
                Professional Medical Care for Your Entire Family
              </h1>
              {/* go to support session & fix it */}
              <Link to="/alldoctors">
                <Button variant="warning">Find Doctor</Button>
              </Link>
            </div>
          </div>
        </header>
        <div className="mb-4 container mx-0  mx-md-auto med-card">
          <h3 className=" my-5 display-4 text-center">Departments</h3>
          <Row xs={1} md={2} lg={3} className="g-4 ">
            {departments.map((department, index) => (
              <Departments
                key={index.toString()}
                department={department}
              ></Departments>
            ))}
          </Row>
        </div>
      </div>
    );
};

export default Home;