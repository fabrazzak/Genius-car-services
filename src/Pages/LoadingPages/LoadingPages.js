import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingPages = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'400px'}}>
            <Spinner animation="border" variant="primary" />
    
        </div>
    );
};

export default LoadingPages;