import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from './Expert/Expert';

const Experts = () => {
    const experts = [
        {
            "id": 1,
            "name": "Abdul Hakim",
            "img":  expert1 ,
            "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        },
        {
            "id": 2,
            "name": "Jons Smith",
            "img":  expert2 ,
            "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        },
        {
            "id": 3,
            "name": "Md Sabbir",
            "img":  expert3 ,
            "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        },
        {
            "id": 4,
            "name": "Abdur Razzak",
            "img":  expert4 ,
            "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        },
        {
            "id": 5,
            "name": "md Jami",
            "img":  expert5 ,
            "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        },
        {
            "id": 6,
            "name": "Mrs Bristy Akter",
            "img":  expert6 ,
            "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        },

    ]

    return (
        <div className='container' id='experts'>
            <h1 className='text-center text-primary fw-bold my-5'>Experts</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                {
                    experts.map(expert =>
                        <Expert
                            key={expert.id}
                            expert={expert}
                        >
                        </Expert>
                    )
                }
            </div>
        </div>
    );
};

export default Experts;