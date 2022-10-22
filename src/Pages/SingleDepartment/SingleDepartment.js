import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './SingleDepartment.css';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const SingleDepartment = () => {
  const [value, onChange] = useState(new Date());
    const data = useLoaderData();
    const {name, image, desc} = data;
    return (
      <div>
        <div
          className="p-5 text-center bg-dark overlay"
          style={{
            backgroundImage: ` linear-gradient(to right, rgba(19, 59, 136, 0.4), rgba(19, 59, 136, 0.4)), url(${image})`,
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="hero-text-2 container">
          <Row xs={1} md={2}>
            <Col className="d-flex align-items-center">
              {" "}
              <div className="d-flex flex-column align-items-start">
                <h1 className="display-1 " style={{ fontWeight: "bold" }}>
                  {name}
                </h1>
                <p className="text-start">{desc}</p>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  backgroundColor: "#ffffff9c",
                  borderRadius: "20px",
                  borderTop: "20px solid #126FE6",
                }}
                className="rounded-lg p-5"
              >
                <div className="info">
                  <h3 style={{ color: "#133B88" }}>See Available Doctors</h3>
                  <p className="text-dark">
                    Do not put off until tomorrow the problems that need to be
                    addressed today, especially if it concerns your health!
                  </p>
                </div>
                <div>
                  <h3 className="text-dark">
                    Service Name:{" "}
                    <span style={{ color: "#133B88" }}>{name}</span>
                  </h3>
                  <h5 className="mt-3" style={{ color: "#133B88" }}>
                    Chosse Appointment Date:
                  </h5>
                  <div className="d-flex align-items-center justify-content-center">
                    <Calendar onChange={onChange} value={value}></Calendar>
                  </div>
                  <Button variant="warning" className="my-3">
                    Find Doctors
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
};

export default SingleDepartment;