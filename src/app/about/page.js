import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="hero min-h-screen text-slate-800 bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <Image
            width={1000}
            height={1000}
            alt="Person working on a car"
            src="/assets/images/about_us/person.jpg" // Update this path if necessary
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <Image
            width={1000}
            height={1000}
            alt="Car parts"
            src="/assets/images/about_us/parts.jpg" // Update this path if necessary
            className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-4">
          <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & experienced in this field
          </h1>
          <p className="py-6">
            Our dedicated team of automotive professionals is here to provide
            top-notch service and care for your vehicle. With years of
            experience in the industry, we understand the intricacies of car
            maintenance and repair.
          </p>
          <p className="py-6">
            We prioritize quality and customer satisfaction, ensuring that each
            service is tailored to meet your specific needs. Trust us to keep
            your vehicle running smoothly and safely on the road.
          </p>
        </div>
      </div>
    </div>
  );
}
