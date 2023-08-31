"use client";
import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {useRouter, useSearchParams} from "next/navigation";
import Link from "next/link";
const SignUpForm = () => {

const {createUser, updateUserData} = useAuth();
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


    const onSubmit = data => {
        console.log(data);


        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;

            console.log(loggedUser);

            updateUserData(result.user, data.name)

  .then(()=> {
    const saveUser = {name: data.name, email: data.email};
    fetch('http://localhost:3000/api/users', {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(saveUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);

        if(data.insertedId){
            console.log('done');
        }
    })
    .catch(error => console.log(error))
   })



            toast.success("User signed up successfully");
            replace(from);
        })



        .catch(error => {
            toast.error(error.message || "User Create failed")
        })

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
            <div className="divider font-semibold">Have  an account<Link href='/login' className='text-primary'>Sign in</Link></div>
        </form>
    );
};

export default SignUpForm;