"use client";
import { useForm } from "react-hook-form";
import DeposideDropdown from "./DeposideDropdown";

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit =  (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" text-gray-300">
      <div className="md:flex gap-4">
        <div className="form-control">
          <label htmlFor="Fast Name" className=" mb-2">
            Fast Name
          </label>
          <input
            type="text"
            placeholder="Fast Name..."
            {...register("FastName")}
            className="input h-8 border border-gray-600 bg-transparent"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="Last Name" className=" mb-2">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Last Name....."
            {...register("LastName")}
            className="input  h-8 border border-gray-600 bg-transparent"
            required
          />
        </div>
      </div>
      <div className="md:flex gap-4 my-2">
        <div className="form-control">
          <label htmlFor="email" className=" mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="E-mail..."
            ref={register}
            {...register("email")}
            className="input h-8  border border-gray-600 bg-transparent"
            required
          />

        </div>
        <div className="form-control">
          <label htmlFor="phone" className=" mb-2">
            Phone Number
          </label>
          <input
            type="number"
            placeholder="Phone....."
            {...register("Phone")}
            className="input  h-8 border border-gray-600 bg-transparent"
            required
          />

        </div>
      </div>
      <div className="md:flex gap-4 my-2">
        <div className="form-control">
          <label htmlFor="Joining Date" className=" mb-2">
            Joining Date
          </label>
          <input
            type="date"
            placeholder="Joining Date..."
            {...register("JoiningDate")}
            className="input h-8 w-full border border-gray-600 bg-transparent"
            required
          />

        </div>
        <div className="form-control">
          <label htmlFor="city" className=" mb-2">
            City
          </label>
          <input
            type="text"
            placeholder="City....."
            {...register("City")}
            className="input w-full h-8 border border-gray-600 bg-transparent"
            required
          />

        </div>
      </div>
      <div className="md:flex gap-4 my-2">
        <div className="form-control">
          <label htmlFor="Country " className=" mb-2">
            Country
          </label>
          <input
            type="text"
            placeholder="Country ..."
            {...register("Country")}
            className="input h-8 w-full border border-gray-600 bg-transparent"
            required
          />

        </div>
        <div className="form-control">
          <label htmlFor="Zip Code" className=" mb-2">
            Zip Code
          </label>
          <input
            type="number"
            placeholder=" Zip Code....."
            {...register("ZipCode")}
            className="input w-full h-8 border border-gray-600 bg-transparent"
            required
          />

        </div>
      </div>
      <div className="md:flex gap-6">
        <div className="">
          <label htmlFor="Deposit Assets" className="mb-2">
            Deposit Assets
          </label>
          <div className="w-full my-2 h-8 border border-gray-600 bg-transparent rounded-md px-2">
            <DeposideDropdown></DeposideDropdown>
          </div>
        </div>
        <div className="">
          <label htmlFor="Withdraw Assets" className="mb-2">
            Withdraw Assets
          </label>
          <div className="w-full my-2 h-8 border border-gray-600 bg-transparent rounded-md px-2">
            <DeposideDropdown></DeposideDropdown>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="Description" className=" mb-2">
          Description
        </label>
        <textarea
          placeholder=" Description....."
          {...register("Description")}
          rows={3}
          className="border outline-none  rounded-md p-4 border-gray-600 bg-transparent"
        />
      </div>

      <div className=" flex gap-4 my-4">
        <button
          className="btn-success  btn  btn-sm  hover:text-black hover:bg-green-300 duration-700"
          type="submit"
        >
          Update
        </button>
        <button
          className=" btn btn-outline btn-error btn-sm hover:text-black hover:bg-green-300 duration-700"
          type=""
        >
         Cancel
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
