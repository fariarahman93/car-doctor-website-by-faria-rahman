"use client";
import React, { useEffect, useState } from 'react';
import { getServicesDetail } from '@/servicess/getServices';
import Link from 'next/link';

const Page = ({ params }) => {
    const [serviceDetails, setServiceDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const data = await getServicesDetail(params.id);
                console.log('Fetched Data:', data); 
                setServiceDetails(data.service); 
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [params.id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!serviceDetails) {
        return <p>No service details found.</p>;
    }

    // Destructure the properties from the service object
    const {
        _id,
        title,
        img,
        price,
        description,
        facility, // Assuming facility is an array of objects
    } = serviceDetails;

    // Log to verify the structure
    console.log('Service Details:', serviceDetails);
    console.log('Description:', description);
    console.log('Facility:', facility);

    return (
        <div className="flex flex-col h-full justify-between w-full">
            {/* Main Content Area */}
            <div className="flex-grow flex items-center justify-center">
                <div className="card bg-base-100 shadow-xl text-black w-full">
                    <figure className="px-10 pt-10">
                        <img src={img} alt={title} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-rose-600 font-bold">{title}</h2>
                        {/* Render description, ensure it's a string */}
                        <p>{typeof description === 'string' ? description : 'Invalid description format.'}</p>
                      

                        {/* Render facilities */}
                        <p className="text-rose-600 font-bold">Facilities:</p>
                        <ul>
                            {Array.isArray(facility) && facility.length > 0 ? (
                                facility.map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.name}</strong>: {item.details}
                                    </li>
                                ))
                            ) : (
                                <li>No facility information available.</li>
                            )}
                        </ul>
                        <p ><span className="font-bold text-rose-600">Price:</span> ${price}</p>

                        <div className="card-actions">
                        <Link href={`/checkout/${_id}`}>
    <button className="bg-rose-500 px-3 py-2 rounded-lg mt-2 w-full font-bold text-white">Buy Now</button>
</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
