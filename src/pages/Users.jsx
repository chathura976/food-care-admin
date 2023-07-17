import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import axios from "axios";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/users/users");
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Layout>
      <div className="relative w-full flex flex-col shadow-lg mb-6 mt-12">
      <div className="p-4 ">
        <div className="p-4 text-lg">
        <h2>User List</h2>
        </div>
        <table class="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
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
                Is Verified
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td class="p-4 border-b border-gray-500 ...">{user.name}</td>

                <td class="p-4 border-b border-gray-500 ...">{user.email}</td>
                <td class="p-4 border-b border-gray-500 ...">{user.phone}</td>
                <td class="p-4 border-b border-gray-500 ...">{user.address}</td>
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
