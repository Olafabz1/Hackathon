import React from "react";

export const Register = () => {
    return(

        <div className="container mx-auto text-white">

                <h1 className="text-[34px]">Register</h1>

                   <div className="container mx-auto text-white">

                <h1 className="text-[34px]">Create Account</h1>

                <div>
                 <input type="text" name="name" id="name"placeholder="Fullname" required />

                 <input type="email" name="email" id="email" placeholder="Email" required />

                <input type="password" name="password" id="password" placeholder="Password" required />

                <hr />OR <hr />

                <div>
                 <a href="#">Continue with facebook</a>
                </div>

                <div>
                 <a href="#">Continue with Google</a>
                </div>

                <div>
                 Dont have an account?  Sign up
                </div>

                 
                </div>


               
        </div>


        <div className="container mx-auto text-white">

                <h1 className="text-[34px]">Log into your account</h1>

                <div>

                 <input type="email" name="email" id="email" placeholder="Email" required />

                <input type="password" name="password" id="password" placeholder="Password" required />

                <hr />OR <hr />

                <div>
                 <a href="#">Continue with facebook</a>
                </div>

                <div>
                 <a href="#">Continue with Google</a>
                </div>

                <div>
                 Dont have an account?  Sign up
                </div>

                 
                </div>


               
        </div>

               
        </div>
    );
};