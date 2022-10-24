import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaFacebook, FaGoogle, } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const SignUp = () => {
  const [error, setError] = useState('');
  const { signup, singinWithGoogle, signinWithFacebook } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handalSignUp = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confrimPassword = form.confrimPassword.value;
    if(password !== confrimPassword){
      return setError('Password not Matched!')
    }
    signup(email, password)
    .then(result=>{
      const user = result.user;
      navigate(from, { replace: true });
      form.reset();
      setError('');
      Swal.fire("Congress!", "Your Account Create Successfully!", "success");
      
      console.log(user);
    })
    .catch(error=> setError(error.message));
  }
  const handalFacebook = () => {
    signinWithFacebook()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => setError(error.message));
  };
  const handalGoogle = () =>{
      singinWithGoogle()
      .then((result)=>{
        const user = result.user;
         navigate(from, { replace: true });
        console.log(user);
      })
      .catch(error=>setError(error.message))
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
          <h2 className="px-5 pt-5 font-weight-bold">Create an Account</h2>
          <Form onSubmit={handalSignUp} className="px-5 py-3">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
            </Form.Group>
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
            <Form.Group className="mb-3" controlId="formBasicConfrim">
              <Form.Label>Confrim Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="confrimPassword"
                placeholder="Confrim Password"
              />
            </Form.Group>
            <Form.Text className="text-danger">{error}</Form.Text>
            <div className="text-center mt-4 mb-0">
              <Button style={{ width: "100%" }} variant="warning" type="submit">
                Create an Account
              </Button>
            </div>
          </Form>
          <div className="text-center">
            <h6>
              Already have an account?{" "}
              <Button variant="link" className="text-warning">
                <Link to="/login">LogIn</Link>
              </Button>
            </h6>
          </div>
        </div>
        <div className="text-center my-3">
          <h3>Or</h3>
          <hr style={{ width: "250px" }} />
          <div className="mb-2 ">
            <Button
              onClick={handalFacebook}
              variant="dark"
              style={{ width: "350px" }}
            >
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
            <Button
              onClick={handalGoogle}
              variant="outline-dark"
              style={{ width: "350px" }}
            >
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

export default SignUp;