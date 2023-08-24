"use client";
import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {useRouter, useSearchParams} from "next/navigation";
import Link from "next/link";
import createJWT from "@/utils/createJWT";
const SignUpForm = () => {
const {createUser, profileUpdate} = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
    } = useForm();

    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const { replace } = useRouter();


    const onSubmit = async (data) => {
        try {
            await createUser(email, password);
            await createJWT({ email });
            await profileUpdate({
              displayName: data.name,
            });
            const response = await fetch("http://localhost:3000/api/add-user", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ userName: data.name, email: data.email }),
              });
            
              if (response.ok) {
                const data = await response.json();
                console.log("Data added:", data);
              } else {
                console.error("Failed to add data");
              }
            toast.success("User signed up successfully");
            replace(from);
        } catch (error) {
            toast.error(error.message || "User Create failed")
        }
            


    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card-body text-white">
            <div className="form-control">
                <label htmlFor="name" className="font-semibold mb-2">
                    Name
                </label>
                <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    name="name"
                    className="input border border-gray-600 bg-transparent"
                    {...register("name", { required: true })}
                />
                {errors.name && (
                    <span className="text-red-500 text-base mt-1">
                        Please enter your name.
                    </span>
                )}
            </div>
            <div className="form-control">
                <label htmlFor="email" className="font-semibold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="E-mail"
                    id="email"
                    name="email"
                    className="input border border-gray-600 bg-transparent"
                    autoComplete="email"
                    {...register("email", {
                        required: true,
                        pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
                    })}
                />

                {errors.email && (
                    <span className="text-red-500 text-base mt-1">
                        Please enter a valid email address.
                    </span>
                )}

            </div>
            <div className="form-control">
                <label htmlFor="password" className="font-semibold mb-2">
                    Password
                </label>
                <input
                    type="password"
                    placeholder="******"
                    id="password"
                    name="password"
                    className="input border border-gray-600 bg-transparent"
                    autoComplete="new-password"
                    {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && (
                    <span className="text-red-500 text-base mt-1">
                        Please enter a password.
                    </span>
                )}
            </div>
            <div className="">
                <input type="checkbox" name="remember" className="form-checkbox text-green-500 outline-none" />
                <span class="ml-2 text-white">Remember me</span>
            </div>
            <div className="form-control mt-3 md:w-1/4 w-2/4 mx-auto" >
                <button className="social-btn hover:text-black hover:bg-green-300 duration-700" type="submit">
                    Sign Up
                </button>
            </div>
            <div className="divider font-semibold">Have not an account<Link href='/login' className='text-primary'>Sign Up</Link></div>
        </form>
    );
};

export default SignUpForm;