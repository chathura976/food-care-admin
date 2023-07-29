import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import card1 from "../assests/data/Dashboard/card1.jpeg";
import card2 from "../assests/data/Dashboard/card2.png";
import card3 from "../assests/data/Dashboard/card3.jpg";
import card4 from "../assests/data/Dashboard/card4.jpeg";
import useFetchUsers from "../api/userFetch";
import useFetchFooDs from "../api/foodFetch";
import CountUp from "react-countup";

const CpostCount = 1000;

export default function MultiActionAreaCard() {
  const [userCount, setUserCount] = useState(0);
  const users = useFetchUsers();
  const [foodCount, setFoodCount] = useState(0);
  const foods = useFetchFooDs();

  useEffect(() => {
    setUserCount(users.length);
  }, [users]);

  useEffect(() => {
    setFoodCount(foods.length);
  }, [foods]);
  const cardData = [
    {
      id: 1,
      title: `User Count = ${userCount}`,
      description: "",
      imageUrl: card1,
    },
    {
      id: 2,
      title: `Posts on the Wall = ${foodCount}`,
      description: "",
      imageUrl: card2,
    },
    {
      id: 3,
      title: `Community Posts= ${CpostCount} `,
      description: "",
      imageUrl: card3,
    },
    {
      id: 4,
      title: `Completed Posts = ${CpostCount}`,
      description: "",
      imageUrl: card4,
    },

    // Add more card data objects here for additional cards
  ];

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {cardData.map((card) => (
        <Card key={card.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <img src={card.imageUrl} alt={card.alt} height="140" />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {/* Use CountUp component here for the count animation */}
                <CountUp
                  start={0}
                  end={parseInt(card.title.split("=")[1].trim())}
                  duration={3}
                  separator=","
                  decimals={0}
                  decimal="."
                  prefix={card.title.split("=")[0].trim()}
                />
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-lg text-gray-600"
              >
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
