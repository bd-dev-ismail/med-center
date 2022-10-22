import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const DoctorsAndMap = () => {
    return (
        <div>
            <Container >
                <Row>
                    <Col xs={12} lg={6}>
                        <div>This is doctor list</div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div>This is Map</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DoctorsAndMap;