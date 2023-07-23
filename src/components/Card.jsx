import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import card1 from "../assests/data/Dashboard/card1.jpeg";
import card2 from "../assests/data/Dashboard/card2.png";
import card3 from "../assests/data/Dashboard/card3.jpg";
import card4 from "../assests/data/Dashboard/card4.jpeg";
const userCount = 1000;
const PostCount = 1000;
const CpostCount = 1000;
const CompleteCount = 1000;

const cardData = [
  {
    id: 1,
    title: `User Count = ${userCount}`,
    description: "",
    imageUrl: card1,
  },
  {
    id: 2,
    title: `Posts on the Wall Count= ${userCount}`,
    description: "",
    imageUrl: card2,
  },
  {
    id: 3,
    title: `Community Posts Count = ${CpostCount}`,
    description: "",
    imageUrl: card3,
  },
  {
    id: 4,
    title:  `Completed Posts Count= ${CpostCount}`,
    description: "",
    imageUrl: card4,
  },

  // Add more card data objects here for additional cards
];

export default function MultiActionAreaCard() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {cardData.map((card) => (
        <Card key={card.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <img src={card.imageUrl} alt={card.alt} height="140" />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="text-lg text-gray-600">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}