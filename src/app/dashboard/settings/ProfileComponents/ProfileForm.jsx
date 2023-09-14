"use client";
import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ProfileForm = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  console.log(user);

  const onSubmit = async (data) => {
    const { username, phon, date, city, zipcode, photourl, facebook, linkedin, twitter, instagram, description } = data;

    const otherdata = { "Phone": phon, "Date": date, "City": city, "ZipCode": zipcode, "PhotoUrl": photourl, "Facebook": facebook, "LinkedIn": linkedin, "twitter": twitter, "Instragram": instagram, "Description": description };
    await fetch(`/api/allUsers/${user.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName: username, otherData: otherdata }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success('User update is successful');
      })
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
            id="username"
            name="username"
            {...register("username")}
            className=" h-8 border-b-2 outline-none border-gray-600 bg-transparent"
            required
          />
        </div>
      </div>
      <div className="md:flex w-10/12 md:w-full gap-4 my-2">
        {/* <div className="form-control">
          <input
            type="email"
            placeholder="E-mail..."
            ref={register}
            name="email"
            id="email"
            {...register("email")}
            className="border-b-2 outline-none h-8   border-gray-600 bg-transparent"
            required
          />
        </div> */}
        <div className="form-control">
          <input
            type="number"
            placeholder="Phone....."
            id="phon"
            name="phon"
            {...register("phon")}
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
            id="date"
            name="date"
            {...register("date")}
            className="border-b-2 outline-none h-8 w-full  border-gray-600 bg-transparent mt-2"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="City....."
            id="city"
            name="city"
            {...register("city")}
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
            id="country"
            name="country"
            {...register("country")}
            className="border-b-2 outline-none h-8   border-gray-600 bg-transparent"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="number"
            placeholder=" Zip Code....."
            id="zipcode"
            name="zipcode"
            {...register("zipcode")}
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
            id="photourl"
            name="photourl"
            {...register("photourl")}
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
                id="facebook"
                name="facebook"
                {...register("facebook")}
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
                id="twitter"
                name="twitter"
                {...register("twitter")}
                className=" h-8 border-b-2 outline-none border-gray-600 bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex w-10/12 md:w-full gap-6 my-4">
        <div className="">
          <label htmlFor="linkedin url" className="mb-2">
            LinkedIn Url
          </label>
          <div className=" my-2 h-8 border-b-2 outline-none border-gray-600 bg-transparent rounded-md px-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="LinkedIn Url..."
                id="linkedin"
                name="linkedin"
                {...register("linkedin")}
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
                id="instagram"
                name="instagram"
                {...register("instagram")}
                className=" h-8 border-b-2 outline-none border-gray-600 bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-10/12">
        <textarea
          placeholder=" Description....."
          id="description"
          name="description"
          {...register("description")}
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