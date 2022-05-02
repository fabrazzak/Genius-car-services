import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
       
        const url = `https://blooming-stream-64870.herokuapp.com/order?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data);
            })
    }, [user])

    return (
        <div>
            <h1>This is order pages {orders.length}</h1>
        </div>
    );
};

export default Orders;