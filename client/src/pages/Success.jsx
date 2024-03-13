import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HappyPit from '../../public/assets/happypit.jpg'

function Success() {
    return (
        <Container fluid className='procontainer' style={{marginTop: '8rem'}}>
            
                <Col>
                    <h1>Your payment was successful! Thank you for your donation!</h1>
                    <img src={HappyPit} alt='smilepit' className="img-fluid" />
                </Col>
            
        </Container>
    );
}

export default Success;