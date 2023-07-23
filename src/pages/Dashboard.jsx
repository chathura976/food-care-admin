// Dashboard.js
import React from "react";
import { Layout, LineChart } from "../components";
import Card from '../components/Card';

const Dashboard = () => {
  const stats = [];

  return (
    <>
      <Layout>
        <div className="flex flex-col gap-4">
          {/* Cards */}
          <Card stats={stats} />
          {/* Add more cards here as needed */}
        </div>

        {/* Line Chart */}
        <div className="mt-8">
          <LineChart />
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
