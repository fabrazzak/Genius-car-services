import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services,setService]=useState([]);
    useEffect(()=>{
        fetch("services.json")
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div className='container'>
            <h1 className='text-center text-primary my-5 fw-bold'>Services</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                {
                services.map(service => <Service
                key={service.id} service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;