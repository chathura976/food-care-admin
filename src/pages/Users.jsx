import React from "react";
import { Layout } from "../components";
import User from "../assests/user.png";
import useFetchUsers from "../api/userFetch";
const Users = () => {
  const users = useFetchUsers();

  return (
    <Layout>
      <div className="relative w-full flex flex-col shadow-lg mb-6 mt-12">
        <div className="p-4 ">
          <table class="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-200 bg-gray-100 p-4">
                  profile picture
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 p-4">
                  Name
                </th>

                <th className="border-b-2 border-gray-200 bg-gray-100 p-4">
                  Email
                </th>

                <th className="border-b-2 border-gray-200 bg-gray-100 p-4">
                  Phone Number
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 p-4">
                  Address
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 p-4">
                  Verify
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="p-4 border-b border-gray-500 items-center">
                    {/* Add profile picture here */}
                    {user.imageUrl ? (
                      <img
                        src={user.imageUrl}
                        alt={`${user.name}'s Profile`}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <img
                        src={User} // Replace this with the correct path to user.png
                        alt={`${user.name}'s Profile`}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    )}
                  </td>
                  <td class="p-4 border-b border-gray-500 ...">{user.name}</td>

                  <td class="p-4 border-b border-gray-500 ...">{user.email}</td>
                  <td class="p-4 border-b border-gray-500 ...">{user.phone}</td>
                  <td class="p-4 border-b border-gray-500 ...">
                    {user.address}
                  </td>
                  <td class="p-4 border-b border-gray-500 ...">
                    {user.isVerify ? "Yes" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
