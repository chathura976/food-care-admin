import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../src/pages/Login";
import Dashboard from "../src/pages/Dashboard";
import FoodPosts from "../src/pages/FoodPosts";
import Calendar from "../src/pages/Calendar";
import Users from "../src/pages/Users";
import Chat from "../src/pages/Chat";
import { AuthContext } from "./contexts/authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        {user && (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/foodposts" element={<FoodPosts />} />
            <Route path="/Calendar" element={<Calendar />} />
            <Route path="/users" element={<Users />} />
            <Route path="/Chat" element={<Chat />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
