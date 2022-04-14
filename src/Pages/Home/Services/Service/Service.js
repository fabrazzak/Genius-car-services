import React from 'react';
import { useNavigate } from 'react-router-dom';


const Service = ({ service }) => {
    const { name, price, img, description,id } = service;
    const navigate=useNavigate();
    const handleBooking=(id)=>{
        navigate(`services/${id}`)

    }
    return (
        
            <div className="col">
                <div className="card">
                    <img src={img} className="card-img-top" alt={service + " " + id}/>
                        <div className="card-body">
                            <h3 className="card-title">{name}</h3>
                            <h5>Price :{price}</h5>

                            <p className="card-text">
                                <span>
                                {description}
                                </span>
                            </p>
                    <button onClick={()=>handleBooking(id)} className='btn btn-primary btn-lg w-100'>Booking {name}</button>
                        </div>
                </div>
            </div>
    
    );
};

export default Service;