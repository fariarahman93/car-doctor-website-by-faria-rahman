import React from 'react';
import {services} from '../../lib/sevices'
import ServiceCard from "../cards/ServiceCard";
import { getServices } from '@/servicess/getServices';



const Services =async () => {
    const data = await getServices()
 
    return (
        <div className="text-slate-800 mb-24 bg-white">
            <div className="text-center container mx-auto">
            <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
            <h2 className="text-5xl">Our Service Area</h2>
        <p>
        From routine maintenance to specialized repairs, explore tailored solutions
         <br /> designed to meet all your vehicle's needs
         
        </p>
            </div>
            <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services?.length > 0 &&
          services?.map((service) => (
            <ServiceCard service={service} key={service._id} />
          ))}
      </div>
            
        </div>
    );
};

export default Services;