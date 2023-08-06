import * as React from "react";
import { red } from "@mui/material/colors";
import { Layout } from "../components";
import FeedbackCard from "../components/FeedbackCard";

export default function UserFeedback() {
  const [feedbacks, setFeedbacks] = React.useState([
    {
      id: 1,
      title: "Shrimp and Chorizo Paella",
      subheader: "September 14, 2016",
      avatarColor: red[500],
      content:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
    {
        id: 2,
      title: "Shrimp ",
      subheader: "September 14, 2016",
      avatarColor: red[500],
      content:"jhkclkclkbah hdabbwid"
    },
    
    // Add more initial feedbacks here...
  ]);

  const handleAddFeedback = (newFeedback) => {
    // Generate a unique ID for the new feedback (You can use a library like 'uuid' for more robust unique IDs)
    const newFeedbackWithId = { ...newFeedback, id: Date.now() };
    setFeedbacks((prevFeedbacks) => [newFeedbackWithId, ...prevFeedbacks]);
  };

  const handleDeleteClick = (feedbackId) => {
    // Handle the delete click event and remove the corresponding feedback from the state
    setFeedbacks((prevFeedbacks) =>
      prevFeedbacks.filter((feedback) => feedback.id !== feedbackId)
    );
  };

  return (
    <Layout>
    <div >
     
        {feedbacks.map((feedback) => (
          <FeedbackCard className="shadow-2xl"
            key={feedback.id}
            title={feedback.title}
            subheader={feedback.subheader}
            avatarColor={feedback.avatarColor}
            content={feedback.content}
            onDeleteClick={() => handleDeleteClick(feedback.id)}
          />
        ))}
     
      
      
    </div>
    </Layout>
  );
}
