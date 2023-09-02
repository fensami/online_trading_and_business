"use client";
import { useForm } from "react-hook-form";

const ChangePasswordForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" text-gray-300">
      <div className="md:flex w-10/12 md:w-full gap-4">
        <div className="form-control">
          <label htmlFor="Current Password" className=" mb-2">
            Current Password
          </label>
          <input
            type="password"
            placeholder="Current Password..."
            {...register("CurrentPassword")}
            className="input h-8 border border-gray-600 bg-transparent"
            required
          />
        </div>
        <div className="form-control">
          <label
            htmlFor="New Password"
            className=" mb-2"
          >
            New Password
          </label>
          <input
            type="password"
            placeholder=" New Password....."
            {...register("NewPassword")}
            className="input  h-8 border border-gray-600 bg-transparent"
            required
          />
        </div>
      </div>
      <div className="md:flex w-10/12 md:w-full items-center gap-4 my-4">
        <div className="form-control">
          <label htmlFor="Confirm Password" className=" mb-2">
          Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password..."
            {...register("ConfirmPassword")}
            className="input h-8 border border-gray-600 bg-transparent"
            required
          />
        </div>
        <div className="mt-6">
        <button
          className="btn-success  btn  btn-sm  hover:text-black hover:bg-green-300 duration-700"
          type="submit"
        >
          Update Password
        </button>
        </div>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
