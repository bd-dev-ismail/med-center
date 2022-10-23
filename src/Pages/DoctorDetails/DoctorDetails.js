import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
const DoctorDetails = ({doctor}) => {
    console.log(doctor);
    const { author, title,fees,rating } = doctor;
    return (
      <Col
        xs={12}
        lg={8}
        style={{ borderRadius: "10px" }}
        className="mb-4 border border-2  ps-0"
      >
        <Row>
          <Col xs={12} lg={4} className="text-center">
            <img
              style={{ width: "270px", height: "188px", borderRadius: "10px" }}
              src={author?.img}
              alt=""
            />
          </Col>
          <Col xs={12} lg={8} className="text-center text-lg-start py-2">
            <h3>{author?.name}</h3>
            <h5>{title}</h5>
            <p>Visiting Hour: {author?.visiting_hour}</p>

            <div className="d-flex justify-content-center align-items-center justify-content-lg-start">
              <p className="me-5">
                <FaStar className="text-warning"></FaStar> {rating.number}
              </p>
              <p>
                Fees: <span style={{ fontWeight: "500" }}>${fees}</span>
              </p>
            </div>
            <Button variant="warning" className='mb-2'>Make An Appointment</Button>
          </Col>
        </Row>
      </Col>
    );
};

export default DoctorDetails;