
"use client";

import { useCart } from "@/components/context/CardContext";

import { getServicesDetail } from "@/servicess/getServices";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Checkout = ({ params }) => {
  const { data } = useSession();
  const [service, setService] = useState({});
  const { incrementCart } = useCart(); 

  // Fetch service details by ID
  const loadService = async () => {
    try {
      const details = await getServicesDetail(params.id);
      setService(details.service);
    } catch (error) {
      console.error("Error fetching service details:", error);
      toast.error("Failed to load service details.");
    }
  };

  // Handle form submission for booking
  const handleBooking = async (event) => {
    event.preventDefault();
    
    const newBooking = { 
      email: data?.user?.email,
      name: data?.user?.name,
      address: event.target.address.value,
      phone: event.target.phone.value,
      date: event.target.date.value,
      serviceTitle: service.title,
      serviceID: service._id,
      price: service.price,
    };

    try {
      const resp = await fetch('http://localhost:3000/checkout/api/new-booking', {
        method: 'POST',
        body: JSON.stringify(newBooking),
        headers: {
          "content-type": "application/json"
        }
      });

      const response = await resp.json();
      if (resp.ok) {
        toast.success(response?.message || "Booking confirmed!");
        incrementCart(); // Increment cart count here
        event.target.reset();
      } else {
        toast.error(response?.error || "Failed to confirm booking.");
      }
    } catch (error) {
      toast.error("Failed to confirm booking.");
      console.error("Error:", error);
    }
  };

  // Load service details when component mounts or when params.id changes
  useEffect(() => {
    loadService();
  }, [params.id]);

  return (
    <div className="container mx-auto">
      <ToastContainer />
      
      {/* Service Image Section */}
      <div className="relative h-72">
        {service.img && (
          <Image
            className="absolute h-72 w-full left-0 top-0 object-cover"
            src={service.img}
            alt={service.title || "Service Image"}
            width={1920}
            height={1080}
            style={{ width: "100%" }} // Ensure image is responsive
          />
        )}
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
            Checkout {service.title || "Service"}
          </h1>
        </div>
      </div>

      {/* Booking Form */}
      <div className="my-12 bg-slate-300 p-12">
        <form onSubmit={handleBooking}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name Field */}
            <div className="form-control text-black">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={data?.user?.name}
                type="text"
                name="name"
                className="input input-bordered"
                required
              />
            </div>

            {/* Date Field */}
            <div className="form-control text-black">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                defaultValue={new Date().toISOString().split("T")[0]} // Set today's date
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-control text-black">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={data?.user?.email}
                type="email"
                name="email"
                className="input input-bordered"
                readOnly
              />
            </div>

            {/* Price Field */}
            <div className="form-control text-black">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                defaultValue={service.price}
                type="text"
                name="price"
                className="input input-bordered"
                readOnly
              />
            </div>

            {/* Phone Field */}
            <div className="form-control text-black">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="input input-bordered"
                required
              />
            </div>

            {/* Address Field */}
            <div className="form-control text-black">
              <label className="label">
                <span className="label-text">Present Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
