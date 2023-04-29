import { Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "../components";
import { Dashboard, FoodPosts, Calendar, Login } from "../pages";
import { useStateContext } from "../contexts/ContextProvider";

const Home = () => {
  const { activeMenu } = useStateContext();
  return (
    <div className="flex relative dark:bg-main-dark-bg">
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}
      <div
        className={
          activeMenu
            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
        }
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
          <Navbar />
        </div>

        <div>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/food-posts" element={<FoodPosts />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default Home;
