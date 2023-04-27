import { useNavigate, Routes, Route } from "react-router-dom";

import { Home, Login } from "../src/pages";

const App = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // handle login logic here
    navigate("/home");
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login handleLogin={handleLogin} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
