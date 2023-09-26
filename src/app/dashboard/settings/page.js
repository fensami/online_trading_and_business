import ProfileDataSecurity from "./ProfileDataSecurity";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";

const SettingsPage = () => {
  return (
    <div className="grid md:flex gap-6  w-full p-6 ">
      {/* Profile info section */}
      <div className="md:w-4/12 w-auto h-fit bg-[#171f2a] p-8 rounded-md">
        <div className="text-center mx-auto mb-4">
          <div class="avatar">
            <div class="w-40 rounded-full">
            </div>
          </div>
          <h1 className="md:text-2xl text-1xl font-semibold my-2">
            EndGameTeam99
          </h1>
          <h3 className="text-1xl  text-gray-300">Amet minim Developer</h3>
        </div>
        <div className="text-gray-300">
          <h2 className="font-semibold">BIO</h2>
          <p className="mb-4">
            Fusce quis tempor augue, congue mollis lorem. Donec et tristique
            massa, a consectetur risus
          </p>
          <h4 className="border-t border-gray-700 pt-4 font-semibold">
            Social media
          </h4>
          <div className="flex gap-4 my-4 ">
            {/* <FaFacebook className="user-icon" /> */}
            {/* <Fa className="user-icon" /> */}
            <BsInstagram className="user-icon" />
            <BiLogoLinkedin className="user-icon" />
          </div>
        </div>
      </div>
      {/* Profile form section */}
      <div className="md:w-8/12 w-11/12 mx-auto bg-[#171f2a] p-6 rounded-md">
        <ProfileDataSecurity />
      </div>
    </div>
  );
};

export default SettingsPage;
