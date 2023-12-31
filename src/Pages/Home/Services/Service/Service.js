import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, description, price, img } = service;
    // Navigate 
    const navigate = useNavigate();

    return (
        <Card className='col-12 col-md-4 border-0 shadow-lg p-2 mb-2 bg-body-tertiary rounded-4'>
            <Card.Img variant="top" src={img} />
            <Card.Body className='text-center'>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text as='h5' className='fw-bold'>{price}</Card.Text>
                <Button onClick={() => navigate('/checkout')} className='appointment-btn' variant='primary' size='lg'>Take Appointment</Button>
            </Card.Body>
        </Card>
    );
};

export default Service;