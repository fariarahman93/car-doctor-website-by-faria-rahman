// "use client";
// import React from 'react';
// import Image from "next/image";
// import { FaGoogle, FaGithub } from "react-icons/fa";
// import Link from 'next/link';
// import { signIn} from "next-auth/react";

// const Page = () => {

//     const handlelogIn = async (event) => {
//         event.preventDefault();
        
        
            
//         const  email= event.target.email.value;
//         const   password= event.target.password.value;
//         const resp =await signIn('credentials',{
//             email,password,redirect: 'false'
//         })
             
        
// console.log(resp);
        
       
//     };

//     return (
//         <div className="grid grid-cols-2 gap-9 items-center min-h-screen bg-white">
//             <div className="flex justify-center ">
//                 <Image
//                     src="/assets/images/login/login.svg"
//                     height="500"
//                     width="500"
//                     alt="login image"
//                 />
//             </div>

//             <div className="flex items-center justify-center h-full">
//                 <div className="border-2 rounded-lg p-12 w-full max-w-lg shadow-xl bg-white">
//                     <div className="hero-content flex-col">
//                         <div className="text-center">
//                             <h1 className="text-4xl font-bold text-[#FF3811]">Sign In</h1>
//                         </div>
//                         <div className="card w-full bg-base-100 shadow-2xl">
//                             <form onSubmit={handlelogIn} className="card-body">
                                
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Email</span>
//                                     </label>
//                                     <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Password</span>
//                                     </label>
//                                     <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
//                                 </div>
                               
                               
//                                 <div className="form-control mt-6">
//                                     <button type='submit' className="btn btn-primary text-black">Sign In</button>
//                                 </div>
//                                 <div className="text-center text-black my-6">
//                                     <h6>Or sign in with</h6>
//                                     <div className="flex justify-center gap-4 mt-4">
//                                         <button className="btn p-6 flex items-center justify-center text-primary">
//                                             <FaGoogle />
//                                         </button>
//                                         <button className="btn p-6 flex items-center justify-center text-primary">
//                                             <FaGithub />
//                                         </button>
//                                     </div>
//                                     <h6 className='pt-3 text-black'>Already Have an account? <Link className='text-primary font-semibold' href={'/signup'}>Sign Up</Link></h6>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;
"use client";
import Image from "next/image";
import Link from "next/link";
import React  from "react";
import { signIn, useSession } from "next-auth/react";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SocialSignin from "@/components/shared/SocialSignin";
const Page = () => {
  const router = useRouter();
  const session = useSession();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path ? path : "/",
    });
  };

  return (
      <div className="container px-24 mx-auto py-24">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/assets/images/login/login.svg"
              height="540"
              width="540"
              alt="login image"
            />
          </div>
          <div className="border-2 p-12">
            <h6 className="text-3xl font-semibold text-primary text-center mb-12">
              Sign In
            </h6>
            <form onSubmit={handleLogin} action="">
              <label htmlFor="email">Email</label> <br />
              <input
                type="text"
                name="email"
                placeholder="your email"
                className="mt-3 w-full input input-bordered"
              />
              <br /> <br />
              <label htmlFor="password">Password</label> <br />
              <input
                type="password"
                name="password"
                placeholder="your password"
                className="w-full mt-3 input input-bordered"
              />
              <br />
              <button
                type="submit"
                className="w-full btn btn-primary mt-12 text-lg"
              >
                Sign In
              </button>
            </form>
            <div>
              <h6 className="my-12 text-center">or sign in with</h6>
              <SocialSignin />
              <h6 className="my-12 text-center">
                not have account ?{" "}
                <Link className="text-primary font-semibold" href={"/signup"}>
                  Sign Up
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Page;