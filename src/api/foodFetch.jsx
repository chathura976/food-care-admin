import { useState, useEffect } from "react";
import axios from "axios";

const useFetchFooDs = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get("/api/food/foodadmin");
        setFoods(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFoods();
  }, []);

  return foods;
};

export default useFetchFooDs;
