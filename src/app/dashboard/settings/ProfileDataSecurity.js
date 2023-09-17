"use client";
import { useState } from "react";
import ProfileForm from "./ProfileComponents/ProfileForm";
import ChangePasswordForm from "./ProfileComponents/ChangePasswordForm";
import DeviceHistory from "./ProfileComponents/DeviceHistory";
import ScanSection from "./ProfileComponents/ScanSection";
import { CgProfile } from 'react-icons/cg';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BiScan } from 'react-icons/bi';
import { MdManageHistory } from 'react-icons/md';


const ProfileDataSecurity = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="">
      <div className="flex gap-3  font-semibold mb-4">
        <h4
          className={`cursor-pointer flex gap-1 items-center ${activeTab === "profile" ? "text-green-300 underline" : "text-white"
            } mr-4`}
          onClick={() => handleTabClick("profile")}
        >
          <CgProfile />  Profile
        </h4>
        <h4
          className={`cursor-pointer flex gap-1 items-center ${activeTab === "password" ? "text-green-300 underline" : "text-white"
            } mr-4`}
          onClick={() => handleTabClick("password")}
        >
          <RiLockPasswordFill /> Change Password
        </h4>
        <h4
          className={`cursor-pointer flex gap-1 items-center ${activeTab === "twoFactor"
            ? "text-green-300 underline"
            : "text-white"
            }`}
          onClick={() => handleTabClick("twoFactor")}
        >
          <BiScan />  Two Factor
        </h4>
      </div>
      <div className="">
        <h4
          className={`cursor-pointer font-semibold flex gap-1 items-center ${activeTab === "DeviceHistory"
            ? "text-green-300 underline"
            : "text-white"
            }`}
          onClick={() => handleTabClick("DeviceHistory")}
        >
          <MdManageHistory /> Login Device History
        </h4>
      </div>
      {/* Show content based on activeTab */}
      {activeTab === "profile" && (
        <div className="mt-4 text-white">
          <ProfileForm />
        </div>
      )}
      {activeTab === "password" && (
        <div className="mt-4 text-white">
          <ChangePasswordForm />
        </div>
      )}
      {activeTab === "twoFactor" && (
        <div className="mt-4 text-white">
          <ScanSection />
        </div>
      )}
      {activeTab === "DeviceHistory" && (
        <div className="mt-4 text-white">
          <DeviceHistory />
        </div>
      )}
    </div>
  );
};

export default ProfileDataSecurity;
