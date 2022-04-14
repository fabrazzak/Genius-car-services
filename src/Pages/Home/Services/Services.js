import React, { useEffect, useState } from 'react';
import useServices from '../../../useServices';
import Service from './Service/Service';

const Services = () => {
    const [services,setServices]=useServices();

    
    return (
        <div className='container' id="services">
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