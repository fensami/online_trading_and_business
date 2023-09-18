import SocialLogin from "../components/SocialLogin";

const SubLogin = () => {
  return (
    // main div
    <div
      className="grid md:grid-cols-2 gap-2 justify-between items-center lg:px-6 lg:mx-6 bg-cover mx-4 bg-center rounded-sm opacity-50 font-sans  to-blue-500 dark:bg-gradient-to-br from-red-500 via-transparent "
      style={{
        backgroundImage:
          'url("https://i.ibb.co/Q6k4RBV/hands-with-gift-box-204757-1481.jpg")',
      }}
    >
      {/* Your content goes here */}
      <div className="bg-transparent   duration-700 p-6 shadow-md md:order-none order-last rounded-md my-8  ml-3">
        <div className="text-white md:text-4xl text-2xl font-bold opacity-80">
          <p className="md:py-2">Join over 2.5k </p>
          <p>traders worldwide</p>
        </div>
        <p className="py-3 text-blue-100">Sign up for your demo account now.</p>
        <form>
          <div className="flex justify-start gap-4 items-center  ">
            <input
              className="outline-none border h-10 w-3/4 px-2 bg-transparent"
              type="text"
              placeholder="Email Address"
            />
            <button
              className="bg-gray-400  font-semibold text-black h-10 w-1/4"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="flex gap-2 mt-2">
            <input type="checkbox" name="" id="" />
            <p>
              I agree to the{" "}
              <a className="text-blue-100" href="">
                Trams and conditions
              </a>
            </p>
          </div>
        </form>
        <div className="">
          <SocialLogin />
        </div>
      </div>
      <div className="p-6">
        <h1 className="md:text-5xl text-3xl font-bold text-white leading-28">
          <span>Get a teste of the</span> <br />
          <p className="font-extrabold text-gray-400 md:my-4">
            Trading & Business
          </p>
          <span> experience</span>
        </h1>
      </div>
    </div>
  );
};

export default SubLogin;
