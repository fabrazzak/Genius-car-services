import React, { useState } from 'react';
import useServices from '../../useServices';

const Manage = () => {
    const [services, setServices] = useServices();

    const handleOnClickDelete = id => {
        const proceed = window.confirm("Are you sure ?");
        if (proceed) {
            const url = `https://blooming-stream-64870.herokuapp.com/service/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => console.log(data))
            const remining = services.filter(service => service._id !== id);
            setServices(remining);


        }



    }
    return (
        <div className='w-50 mx-auto py-5 '>
            <h1 className='text-center'>All services list</h1>
            <ol className='d-flex justify-content-center flex-column '>
                {
                    services.map(service => <li key={service._id}>
                        <h5>Name: {service.name}
                            <button className='btn-danger rounded ms-3' onClick={() => handleOnClickDelete(service._id)}> Delete</button></h5>
                    </li>)
                }
            </ol>

        </div>
    );
};

export default Manage;