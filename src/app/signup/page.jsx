"use client";
import React from 'react';
import Image from "next/image";
import { FaGoogle} from "react-icons/fa";
import Link from 'next/link';

const SignUpPage = () => {

    const handleSignUp = async (event) => {
        event.preventDefault();
        
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            service: event.target.services.value, 
        };

        
        const resp = await fetch("http://localhost:3000/signup/api", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
              "content-type": "application/json",
            },
          });
          if (resp.status === 200) {
            event.target.reset();
          }
        };

    return (
        <div className="grid grid-cols-2 gap-9 items-center min-h-screen bg-white">
            <div className="flex justify-center">
                <Image
                    src="/assets/images/login/login.svg"
                    height="500"
                    width="500"
                    alt="login image"
                />
            </div>

            <div className="flex items-center justify-center h-full">
                <div className="border-2 rounded-lg p-12 w-full max-w-lg shadow-xl bg-white">
                    <div className="hero-content flex-col">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-[#FF3811]">Sign Up</h1>
                        </div>
                        <div className="card w-full bg-base-100 shadow-2xl">
                            <form onSubmit={handleSignUp} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered text-black" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input input-bordered text-black" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered text-black" required />
                                </div>
                               
                                <div className="form-control mt-4">
    <label className="label">
        <span className="label-text">Select a Service</span>
    </label>
    <select name="services" className="select select-bordered text-black" required>
        <option disabled selected>Select a service</option>
        <option value="service1">Engine Oil Change</option>
        <option value="service2">Battery Charge</option>
        <option value="service3">Full car Repair</option>
        <option value="service4">Engine Repair</option>
        <option value="service4">Automatic Services</option>
        <option value="service4">Electrical System</option>
    </select>
</div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary text-white">Sign Up</button>
                                </div>
                                <div className="text-center my-6 text-black">
                                    <h6>Or sign in with</h6>
                                    <div className="flex justify-center gap-4 mt-4">
                                        <button className="btn p-6 flex items-center justify-center text-primary">
                                            <FaGoogle />
                                        </button>
                                       
                                    </div>
                                    <h6 className='pt-3 text-black'>Have an account? <Link className='text-primary font-semibold' href={'/login'}>Sign In</Link></h6>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
