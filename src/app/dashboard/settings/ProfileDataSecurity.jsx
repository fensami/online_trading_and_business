"use client";
import { useState } from "react";
import ProfileForm from "./ProfileComponents/ProfileForm";
import ChangePasswordForm from "./ProfileComponents/ChangePasswordForm";
import DeviceHistory from "./ProfileComponents/DeviceHistory";
import ScanSection from "./ProfileComponents/ScanSection";

const ProfileDataSecurity = () => {
  const [activeTab, setActiveTab] = useState("profile"); // Initialize the active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="">
      <div className="flex gap-3  font-semibold mb-6">
        <h4
          className={`cursor-pointer ${
            activeTab === "profile" ? "text-green-300 underline" : "text-white"
          } mr-4`}
          onClick={() => handleTabClick("profile")}
        >
          Profile
        </h4>
        <h4
          className={`cursor-pointer ${
            activeTab === "password" ? "text-green-300 underline" : "text-white"
          } mr-4`}
          onClick={() => handleTabClick("password")}
        >
          Change Password
        </h4>
        <h4
          className={`cursor-pointer ${
            activeTab === "twoFactor"
              ? "text-green-300 underline"
              : "text-white"
          }`}
          onClick={() => handleTabClick("twoFactor")}
        >
          Two Factor
        </h4>
      </div>
      <div className="">
        <h4
          className={`cursor-pointer font-semibold ${
            activeTab === "DeviceHistory"
              ? "text-green-300 underline"
              : "text-white"
          }`}
          onClick={() => handleTabClick("DeviceHistory")}
        >
          Login Device History
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
          <ChangePasswordForm/>
        </div>
      )}
      {activeTab === "twoFactor" && (
        <div className="mt-4 text-white">
          <ScanSection/>
        </div>
      )}
      {activeTab === "DeviceHistory" && (
        <div className="mt-4 text-white">
          <DeviceHistory/>
        </div>
      )}
    </div>
  );
};

export default ProfileDataSecurity;
