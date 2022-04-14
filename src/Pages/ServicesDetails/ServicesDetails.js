import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../useServices';

const ServicesDetails = () => {
    const {serviceId}=useParams();
  
   
   

    

    return (
        <div>
            <h1>This is services Details{serviceId} </h1>
        </div>
    );
};

export default ServicesDetails;