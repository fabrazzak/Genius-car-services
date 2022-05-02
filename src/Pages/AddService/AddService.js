
import React from 'react';


const AddService = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const img = event.target.img.value;
        const service = { name, description, price, img };
        event.target.reset();

        console.log(service);

        fetch("https://blooming-stream-64870.herokuapp.com/service/", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            }, body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(result => console.log(result));





    }

    return <div className='mx-auto  py-5'>
        <h1 className='text-center py-3 text-primary'>Please add service !</h1>
        <form onSubmit={handleSubmit} className="d-flex flex-column  w-25 mx-auto">

            <input className='mb-3 fs-5 py-2' placeholder='Name' type='text' name='name' />

            <textarea className='mb-3 fs-5 py-2' placeholder='Description' type='text' name='description' />

            <input className='mb-3 fs-5 py-2' placeholder='Price' type='number' name='price' />

            <input className='mb-3 fs-5 py-2' placeholder='Photo Url' type='text' name='img' />


            <input className='btn-primary btn-lg' type="submit" value="Add Service" />
        </form>
    </div>

};

export default AddService;


