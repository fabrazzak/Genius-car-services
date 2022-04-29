import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServices from '../../useServices';

const ServicesDetails = () => {
    const {serviceId}=useParams();
    const [service,setService]=useState({});
    useEffect(()=>{
        const url =`http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res =>res.json())
        .then(data => setService(data))
    },[])
    const handleProceedCart=()=>{

    }
    return (
        <div className='container py-5 my-5 text-center'>
            <h1>This is services Details{serviceId} </h1>
            <h1>This is services Details{service.name} </h1>
            <Link to="/checkout"><button className='btn btn-primary btn-lg my-5 py-3 px-5' onClick={handleProceedCart}>Proceed Cart </button></Link>
        </div>
    );
};

export default ServicesDetails;