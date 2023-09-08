"use client";
import { useForm } from "react-hook-form";
import DeposideDropdown from "./DeposideDropdown";

const ProfileForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" text-gray-300 flex flex-col gap-6 md:gap-0"
    >
      <div className="md:flex w-10/12 md:w-full gap-4">
        <div className="form-control">
          <input
            type="text"
            placeholder="UserName..."
            {...register("UserName")}
            className=" h-8 border-b-2 outline-none border-gray-600 bg-transparent"
            required
          />
        </div>
      </div>
      <div className="md:flex w-10/12 md:w-full gap-4 my-2">
        <div className="form-control">
          <input
            type="email"
            placeholder="E-mail..."
            ref={register}
            {...register("email")}
            className="border-b-2 outline-none h-8   border-gray-600 bg-transparent"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="number"
            placeholder="Phone....."
            {...register("Phone")}
            className="  h-8 border-b-2 outline-none border-gray-600 bg-transparent"
            required
          />
        </div>
      </div>
      <div className="md:flex w-10/12 md:w-full gap-4 my-2 items-center">
        <div>
          <input
            type="date"
            placeholder="Joining Date..."
            {...register("JoiningDate")}
            className="border-b-2 outline-none h-8 w-full  border-gray-600 bg-transparent mt-2"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="City....."
            {...register("City")}
            className="border-b-2 outline-none  h-8  border-gray-600 bg-transparent"
            required
          />
        </div>
      </div>
      <div className="md:flex w-10/12 md:w-full gap-4 my-2 justify-start items-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Country ..."
            {...register("Country")}
            className="border-b-2 outline-none h-8   border-gray-600 bg-transparent"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="number"
            placeholder=" Zip Code....."
            {...register("ZipCode")}
            className="border-b-2 outline-none  h-8  border-gray-600 bg-transparent"
            required
          />
        </div>
      </div>
      <div className="my-4">
        <div className="form-control">
          <input
            type="text"
            placeholder="photoUrl....."
            {...register("PhotoUrl")}
            className="border-b-2 outline-none  h-8  border-gray-600 bg-transparent"
            required
          />
        </div>
      </div>
      <div className="md:flex w-10/12 md:w-full gap-6 my-4">
        <div className="">
          <label htmlFor="facebook url" className="mb-2">
            Facebook Url
          </label>
          <div className=" my-2 h-8 border-b-2 outline-none border-gray-600 bg-transparent rounded-md px-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Facebook Url..."
                {...register("Facebook")}
                className=" h-8 border-b-2 outline-none border-gray-600 bg-transparent"
                required
              />
            </div>
          </div>
        </div>
        <div className="">
          <label htmlFor="twitter url" className="mb-2">
            Twitter Url
          </label>
          <div className="w-full my-2 h-8  border-b-2 outline-none border-gray-600 bg-transparent rounded-md px-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Twitter..."
                {...register("Twitter")}
                className=" h-8 border-b-2 outline-none border-gray-600 bg-transparent"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex w-10/12 md:w-full gap-6 my-4">
        <div className="">
          <label htmlFor="facebook url" className="mb-2">
            LinkedIn Url
          </label>
          <div className=" my-2 h-8 border-b-2 outline-none border-gray-600 bg-transparent rounded-md px-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="LinkedIn Url..."
                {...register("Linkedin")}
                className=" h-8 border-b-2 outline-none border-gray-600 bg-transparent"
                required
              />
            </div>
          </div>
        </div>
        <div className="">
          <label htmlFor="twitter url" className="mb-2">
            Instagram Url
          </label>
          <div className="w-full my-2 h-8  border-b-2 outline-none border-gray-600 bg-transparent rounded-md px-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Instagram..."
                {...register("Instagram")}
                className=" h-8 border-b-2 outline-none border-gray-600 bg-transparent"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-10/12">
        <textarea
          placeholder=" Description....."
          {...register("Description")}
          rows={1}
          className="border-b-2 outline-none  rounded-md p-4 border-gray-600 bg-transparent"
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
