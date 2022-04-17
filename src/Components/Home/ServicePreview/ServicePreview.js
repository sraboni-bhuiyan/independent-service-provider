import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const ServicePreview = () => {

    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className='container mt-5'>
            <h3 className='text-center fw-bold fst-italic'>My Coaching Services</h3>
            <div>
                {
                    services.map(service => <SingleService
                        key={service.id}
                        service={service}
                    
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default ServicePreview;