import React from 'react';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();



    return (
        <div className='bg-dark text-light py-2'>
            <div className='text-center container my-5 '>
                <h4>Copywrite  &copy; {year} </h4>
                <span className='text-info'>Developer Abdur Razzak</span>
            </div>
        </div>
    );
};

export default Footer;