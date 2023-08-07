import React from "react";
import profilePic from '../assests/data/avatar.jpg'

const AdminCard = ({ adminData }) => {
  return (
    <div className="bg-white ml-4  h-30 rounded-md p-4 flex flex-col items-center border border-gray-400 shadow-lg  ">
      <div className="mb-20">
        <img src={profilePic} alt="Avatar" className="h-22 rounded-full" />
      </div>
      <div className="ml-3">
        <div className="mb-5">
          <span className="font-semibold">Name:</span> {adminData.name}
        </div>
        <div className="mb-5">
          <span className="font-semibold">Email:</span> {adminData.email}
        </div>
        <div className="mb-5">
          <span className="font-semibold">Phone Number:</span>
          {adminData.phoneNumber}
        </div>
        <div className="mb-5">
          <span className="font-semibold">Address:</span> {adminData.address}
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
