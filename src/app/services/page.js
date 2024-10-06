"use client"; // Indicate this is a client component
import React, { useEffect, useState } from 'react';
import ServiceCard from '@/components/cards/ServiceCard';
import { getServices } from '@/servicess/getServices'; // Ensure this path is correct

export default function Services() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesData = await getServices();
        console.log('Fetched services data:', servicesData); // Log fetched data
        setData(servicesData);
      } catch (error) {
        console.error('Error fetching services:', error);
        setError('Failed to load services.'); // Set error message in state
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

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
        {loading ? (
          <p>Loading services...</p>
        ) : error ? (
          <p>{error}</p> // Display error message if there's an error
        ) : data.length > 0 ? (
          data.map((service) => (
            <ServiceCard service={service} key={service._id} />
          ))
        ) : (
          <p>No services available</p> // Message when there are no services
        )}
      </div>
    </div>
  );
}
