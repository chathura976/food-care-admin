import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import axios from "axios";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users/users");
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Layout>
      <div>
        <h2>User List</h2>

        <table class="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Name
              </th>

              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Email
              </th>

              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Phone Number
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Address
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Is Verified
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td class="border border-slate-700 ...">{user.name}</td>

                <td class="border border-slate-700 ...">{user.email}</td>
                <td class="border border-slate-700 ...">{user.phone}</td>
                <td class="border border-slate-700 ...">{user.address}</td>
                <td class="border border-slate-700 ...">
                  {user.isVerify ? "Yes" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Users;
