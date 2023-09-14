import ProfileDataSecurity from "./ProfileDataSecurity";
import './Setting.css'
import UserProfileInfo from "@/components/UserProfileInfo";

const SettingsPage = () => {
  return (
    <div className="grid md:flex gap-6  w-full m-6 ">
      {/* Profile info section */}
      <UserProfileInfo></UserProfileInfo>
      {/* Profile form section */}
      <div className="md:w-8/12 w-11/12 mx-auto bg-[#171f2a] p-6 rounded-md">
        <ProfileDataSecurity />
      </div>
    </div>
  );
};

export default SettingsPage;
