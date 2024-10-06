import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="hero min-h-screen text-slate-800">
    <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
            <Image width={1000} height={1000} alt='Person image' src={'/assets/images/about_us/person.jpg'} className="w-3/4 rounded-lg shadow-2xl" />
            <Image width={1000} height={1000} alt='Part image' src={'/assets/images/about_us/parts.jpg'} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
        </div>
        <div className='lg:w-1/2 space-y-5 p-4'>
            <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6">We are a highly qualified team with extensive experience in our field, ready to deliver exceptional results. Our diverse expertise allows us to tackle challenges effectively and stay ahead of industry trends. </p>
            <p className="py-6">We prioritize collaboration, tailoring our strategies to meet each client's unique needs. This personalized approach, along with our proven track record, ensures successful outcomes and lasting relationships. Trust us to guide you every step of the way.</p>
            
        </div>
    </div>
</div>
  );
};

export default About;