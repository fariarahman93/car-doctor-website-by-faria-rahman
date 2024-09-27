"use client";
import React from 'react';
import Image from "next/image";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Link from 'next/link';

const SignUpPage = () => {

    const handleSignUp = async (event) => {
        event.preventDefault();
        
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            confirmPassword: event.target.confirmPassword.value, 
        };

        
        console.log(newUser);
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
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name='confirmPassword' placeholder="Confirm Password" className="input input-bordered" required />
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
                                        <button className="btn p-6 flex items-center justify-center text-primary">
                                            <FaGithub />
                                        </button>
                                    </div>
                                    <h6 className='pt-3 text-black'>Have an account? <Link className='text-primary font-semibold' href={'/login'}>Log In</Link></h6>
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
