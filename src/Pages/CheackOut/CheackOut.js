import React from 'react';
import { useParams } from 'react-router-dom';
import useServicesDetails from '../useServicesDetails/useServicesDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const axios = require('axios').default;

const CheackOut = () => {
    const { serviceId } = useParams();
    const [service, setService] = useServicesDetails();
    const [user] = useAuthState(auth);
    const handleProcced= event=>{
        event.preventDefault()
       const name=user.displayName;
       const  email=user.email;
        const productId = serviceId;
       const address=event.target.address.value;
       const number = event.target.number.value;
        const order={name,email,productId,address,number}
        console.log(order);
        fetch('https://blooming-stream-64870.herokuapp.com/order',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(order)
        })
        .then(res =>res.json())
        .then(data => console.log(data))
       event.target.reset();
       alert("Order summit successful")

    }
    return (
        <div className='mx-auto  text-center py-lg-5 ' style={{"width":"500px"}}>

            <h2>Please order {service.name}</h2>
            <form onSubmit={handleProcced}>
                <input className='form-control mb-2' value={user.displayName} readOnly  disabled type="text" name="name" placeholder='Name' id="" />
                <input className='form-control mb-2' value={user?.email}  readOnly disabled  type="email" name="email" placeholder='Email' id="" />
                <input className='form-control mb-2' value={service.name} readOnly disabled  type="text" name="Product" placeholder='Product' id="" />
                <input className='form-control mb-2'  type="text" name="number" placeholder='Number' id="" />
                <input className='form-control mb-2' autoComplete='off'  type="text" name="address" placeholder="Address" id="" />
                <input className='form-control mb-2'   value="Checkout" type="submit" />
            </form>
            
        </div>
    );
};

export default CheackOut;