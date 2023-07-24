// Dashboard.js
import React from "react";
import { Layout, LineChart} from "../components";
import Card from "../components/Card";
import {PieChart} from "../components";


const Dashboard = () => {
  const stats = [];

  return (
    <>
      <Layout>
      
        <div className=" gap-4 ">
          {/* Cards */}
          <Card stats={stats} />
          {/* Add more cards here as needed */}
          
          {/* Line Chart */}
          <div className=" flex mt-8">
            <LineChart />
           <PieChart/>
          </div>
        </div>
        
      </Layout>
    </>
  );
};

export default Dashboard;
