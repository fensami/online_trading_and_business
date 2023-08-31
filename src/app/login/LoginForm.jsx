"use client";
import useAuth from "@/hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const LoginForm = () => {
    const {signIn} = useAuth();
    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const { replace } = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async(data) => {
        console.log(data);
        try {
            const {user} = await signIn(data.email, data.password);
            await createJWT({email: user.email})
            toast.success("User signed In successfully")
            replace(from)
        } catch (error) {
            toast.error(error.message || "User not sign in")
        }
    };

        return (
        <form onSubmit={handleSubmit(onSubmit)} className="card-body text-white">
            <div className="form-control">
                <label htmlFor="email" className="font-semibold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="E-mail..."
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
                    placeholder="*******"
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

                <div className="w-full flex justify-between mt-1">
                    <div className="">
                        <input type="checkbox" name="remember" className="form-checkbox text-green-500 outline-none" />
                        <span class="ml-2 text-white">Remember me</span>
                    </div>
                    <div className="">
                        <p className="text-green-400 hover:text-white">Forgot password?</p>
                    </div>
                </div>


            </div>
            <div className="form-control mt-3 md:w-1/4 w-2/4 mx-auto" >
                <button className="social-btn hover:text-black hover:bg-green-300 duration-700" type="submit">
                    Sign In
                </button>
            </div>

        </form>
    );
};

export default LoginForm;