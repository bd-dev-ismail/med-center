import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const LogIn = () => {
  const [error, setError] = useState('');
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();
  const handalLogin = (e)=>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      login(email,password)
      .then(result=>{
        const user = result.user;
        setError('');
        form.reset();
        navigate('/');
        console.log(user)
      })
      .catch(error => setError(error.message));
  }
    return (
      <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <div
          style={{
            border: "1px solid rgba(171, 171, 171, 1)",
            borderRadius: "10px",
          }}
          className="shadow shadow-lg"
        >
          <h2 className="px-5 pt-5 font-weight-bold">LogIn</h2>
          <Form onSubmit={handalLogin} className="px-1 py-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <div>
              <Link className="text-warning">Fotget Pasword?</Link>
            </div>
            <Form.Text className="text-muted mt-2">
              {error}
            </Form.Text>
            <div className="text-center mt-4 mb-0">
              <Button style={{width: '100%'}} variant="warning" type="submit">
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