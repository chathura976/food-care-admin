import React from 'react';
import Layout from "../components/Layout";
import AdminCard from '../components/AdminCard';

const Admin = () => {
  const adminData = [
    {
      
      name: "Chathura 1",
      email: "chathura@example.com",
      phoneNumber: "123-456-7890",
      address: "123 Main Street, City, Country",
    },
    {
      
      name: "Hashan 2",
      email: "hashan@example.com",
      phoneNumber: "222-456-7890",
      address: "123 Main Street, City, Kandy",
    },

    {
      name: "Supun",
      email: "Supun@example.com",
      phoneNumber: "333-456-7890",
      address: "123 Main Street, City, Kahawatta",
    },
    {
      name: "Mathusan",
      email: "Supun@example.com",
      phoneNumber: "333-456-7890",
      address: "123 Main Street, City, Kahawatta",
    }

    // Add more admins as needed
  ];

  return (
    <Layout>
      {adminData.map((admin) => (
        <AdminCard key={admin.name} adminData={admin} />
      ))}
    </Layout>
  );
};

export default Admin;
