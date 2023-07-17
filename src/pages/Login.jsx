import React,{ useContext, useState } from "react";
import LoginImg from "../assests/data/Background.jpg";
import LogoImg from "../assests/data/logos/1(1).png";
import { AuthContext } from "../contexts/authContext/AuthContext";
import { login } from "../contexts/authContext/apiCalls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);
  const handleLogin = (e) => {
    console.log("hi");
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <section class="">
      <div class="">
        <div className="relative w-full h-screen bg-zinc-900/90">
          <img
            className="w-full h-full object-cover mix-blend-overlay"
            src={LoginImg}
            alt=""
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex justify-center items-center h-full">
              <form className="max-w-[400px] w-full mx-auto bg-gray p-8 rounded-lg">
                <img
                  className="w-[150px] h-[150px] object-cover block mx-auto mt-0"
                  src={LogoImg}
                  alt=""
                />

                <h2 className="text-2xl font-bold text-center text-white">
                  Sign In
                </h2>

                <form class="mt-8 space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="youremail@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Your password
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        name="remember"
                        type="checkbox"
                        class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        required
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="font-medium text-gray-50 dark:text-gray-400"
                      >
                        Remember this device
                      </label>
                    </div>{" "}
                    &nbsp;
                    <a
                      href="#"
                      class="ml-auto text-sm font-medium text-blue-400 hover:underline dark:text-blue-500"
                    >
                      forgot Password?
                    </a>{" "}
                    &nbsp;
                  </div>

                  <button
                    onClick={handleLogin}
                    disabled={isFetching}
                    type="submit"
                    class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                </form>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
