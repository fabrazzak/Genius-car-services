import React from 'react';

const Expert = ({expert}) => {
  const   {name, id, img, description} = expert;
    return (
        <div>
            <div class="col">
                <div class="card">
                    <img src={img} class="card-img-top" alt={expert + " " + id} />
                    <div class="card-body">
                        <h3 class="card-title">{name}</h3>
                        
                        <p className="card-text">
                            <span>
                                {description}
                            </span>
                        </p>
                        <button className='btn btn-primary btn-lg w-100'>Hire {name}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expert;