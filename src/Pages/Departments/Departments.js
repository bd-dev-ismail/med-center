import React from 'react';
import { Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';
import './Departments.css'
const Departments = ({ department }) => {
    const {name, image, desc, id} = department;
  return (
    <>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card
            style={{ height: "25rem", width: "350px", color: "#133B88" }}
            id="custom-card"
          >
            <Card.Img variant="top" style={{ height: "200px" }} src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text className="text-black">
                {desc ? desc.slice(0, 100) : "No Desc Found"}
              </Card.Text>
              <Link to={`/department/${id}`}>
                <Button
                  variant="warning"
                  className="w-100"
                  style={{ position: "absolute", bottom: "0", left: "0" }}
                >
                  Check Schedule
                </Button>{" "}
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Departments;