import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import './SingleDepartment.css';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const SingleDepartment = () => {
  const [value, onChange] = useState(new Date());
    const data = useLoaderData();
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
    const {name, image, desc, id} = data;
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    // const handalFindDoctor = ()=>{
    //   navigate(`/doctor/${id}`)
    //   if(!user?.uid){
    //     Swal.fire({
    //       icon: "error",
    //       title: "You Need To Login Frist!",
    //       text: "Please LogIn Your Account or Create an account",
    //     });
    //   }
      
    // }
    return (
      <>
        <div>
          <div
            className="p-5 text-center bg-dark overlay "
            style={{
              backgroundImage: ` linear-gradient(to right, rgba(19, 59, 136, 0.4), rgba(19, 59, 136, 0.4)), url(${image})`,
              height: "32rem",

              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="hero-text-2 container">
            <Row xs={1} md={1} lg={2}>
              <Col className="d-flex align-items-center text-dark">
                {" "}
                <div className="d-flex flex-column align-items-start">
                  <h1 className="display-1 " style={{ fontWeight: "bold" }}>
                    {name}
                  </h1>
                  <p className="text-start">{desc.slice(0, 200)}</p>
                </div>
              </Col>
              <Col
                style={{
                  border: "5px solid #126FE6",
                  borderRadius: "20px",
                }}
              >
                <div className=" p-3 ">
                  <div className="info">
                    <h3 style={{ color: "#133B88" }}>See Available Doctors</h3>
                    <p className="text-dark">
                      Do not put off until tomorrow the problems that need to be
                      addressed today, especially if it concerns your health!
                    </p>
                  </div>
                  <div>
                    <h5 className="mt-3" style={{ color: "#133B88" }}>
                      Chosse Appointment Date:
                    </h5>
                    <div className="d-flex align-items-center justify-content-center">
                      <Calendar onChange={onChange} value={value}></Calendar>
                    </div>

                    <Link to={`/doctor/${id}`}>
                      <Button variant="warning" className="my-3">
                        Find Doctors
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
};

export default SingleDepartment;