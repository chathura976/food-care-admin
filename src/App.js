import React from "react";
import { BrowserRouter as Router, Routes, Route, Link,Navigate  } from "react-router-dom";

import Login from "../src/pages/Login";
import Dashboard from "../src/pages/Dashboard";
import FoodPosts from "../src/pages/FoodPosts";
import Calendar from "../src/pages/Calendar";
import Users from "../src/pages/Users";
const App = () => {
  const user = true;
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={user?<Dashboard />:<Navigate  to="/"/>} />
      <Route path="/foodposts" element={<FoodPosts />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/users" element={<Users/>} />
    </Routes>
  );
};

export default App;
