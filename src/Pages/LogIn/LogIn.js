import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
const LogIn = () => {
    return (
      <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <div style={{ border: "1px solid rgba(171, 171, 171, 1)",  borderRadius: '10px'}} className="shadow shadow-lg">
          <h2 className="px-5 pt-5 font-weight-bold">LogIn</h2>
          <Form className="px-1 py-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <div>
              <Link className="text-warning">Fotget Pasword</Link>
            </div>
            <Form.Text className="text-muted mt-2">
              Ekane user k error messeage deakbo !!
            </Form.Text>
            <div className="text-center mt-4 mb-0">
              <Button variant="warning" type="submit">
                LogIn
              </Button>
            </div>
          </Form>
          <div className="text-center px-1">
            <h6>
              Don't have an account?{" "}
              <Button variant="link" className="text-warning">
                <Link to="/signup">Create an account</Link>
              </Button>
            </h6>
          </div>
        </div>
        <div className="text-center my-3">
          <h3>Or</h3>
          <hr style={{ width: "250px" }} />
          <div className="mb-2 ">
            <Button variant="dark" style={{ width: "350px" }}>
              {" "}
              <FaFacebook
                style={{
                  marginRight: "10px",
                  fontSize: "24px",
                }}
              />
              Continue With Facebook
            </Button>{" "}
          </div>
          <div>
            <Button variant="outline-dark" style={{ width: "350px" }}>
              <FaGoogle
                style={{
                  marginRight: "10px",
                  fontSize: "24px",
                }}
              />
              Continue With Google
            </Button>{" "}
          </div>
        </div>
      </div>
    );
};

export default LogIn;