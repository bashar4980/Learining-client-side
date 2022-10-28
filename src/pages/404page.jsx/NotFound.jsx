import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <Container>
                <Row className="mx-auto py-5">
                    <Col>
                        
                            <h3 className="text-center text-danger">This Page is Not Found</h3>
                       
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;