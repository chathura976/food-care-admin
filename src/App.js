import { useNavigate, Routes, Route } from "react-router-dom";

import { Login, Dashboard, FoodPosts, Calendar } from "../src/pages";

const App = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // handle login logic here
    navigate("/dashboard");
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login handleLogin={handleLogin} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/food-posts" element={<FoodPosts />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
};

export default App;
