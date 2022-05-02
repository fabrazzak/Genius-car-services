import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useServices from '../../useServices';
import useServicesDetails from '../useServicesDetails/useServicesDetails';

const ServicesDetails = () => {
    const {serviceId}=useParams();
    const [service, setService]=useServicesDetails();
    const navigate = useNavigate();
    const handleProceedCart = (id) =>{
        navigate(`/checkout/${id}`)

    }
    return (
        <div className='container py-5 my-5 text-center'>
            <h1>This is services Details:</h1>
            <h4>P/ID :  {serviceId} </h4>
            <h3>Name: {service.name} </h3>
            <button onClick={() => handleProceedCart(serviceId)} className='btn btn-primary btn-lg w-25'>Procced Cart</button>
        </div>
    );
};

export default ServicesDetails;