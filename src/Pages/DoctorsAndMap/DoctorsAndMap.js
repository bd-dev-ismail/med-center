import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const DoctorsAndMap = () => {
    const data = useLoaderData();
    console.log(data);
    return (
      <div>
        <Container>
          <Row className="g-4">
            <Col xs={12} lg={8} className="mb-4">
              <Row>
                <Col xs={12} lg={4}>
                  <img
                    style={{ width: "270px", height: "188px" }}
                    src="https://thumbs.dreamstime.com/b/random-word-concept-cubes-171151178.jpg"
                    alt=""
                  />
                </Col>
                <Col xs={12} lg={8}>
                  <h3>This is Random Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit voluptates, tempora soluta laborum officia vitae
                    officiis totam rem ab quibusdam sed corrupti consequuntur
                    sapiente voluptas rerum cumque fugiat?
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={8}>
              <Row>
                <Col xs={12} lg={4}>
                  <img
                    style={{ width: "270px", height: "188px" }}
                    src="https://thumbs.dreamstime.com/b/random-word-concept-cubes-171151178.jpg"
                    alt=""
                  />
                </Col>
                <Col xs={12} lg={8}>
                  <h3>This is Random Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit voluptates, tempora soluta laborum officia vitae
                    officiis totam rem ab quibusdam sed corrupti consequuntur
                    sapiente voluptas rerum cumque fugiat?
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={4}>
              <div>This is Map</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default DoctorsAndMap;