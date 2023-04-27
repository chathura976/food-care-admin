import { useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
    handleLogin();
    navigate("/home");
  };

  return (
    <div></div>
  );
};
export default Login;
