import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import DoctorDetails from '../DoctorDetails/DoctorDetails';
import GoogleMap from '../Map/GoogleMap';
import './DoctorsAndMap.css';
const DoctorsAndMap = () => {
    const data = useLoaderData();
    return (
      <div>
        <Container>
          <h3 className="my-5">Available Doctors</h3>
          <Row className="g-4">
            {data.map((doctor) => (
              <DoctorDetails key={doctor._id} doctor={doctor}></DoctorDetails>
            ))}
            <Col xs={12} lg={4}>
              <div id="map">
                <GoogleMap></GoogleMap>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default DoctorsAndMap;