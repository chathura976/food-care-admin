import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import IconButton from "@mui/material/IconButton";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { Layout } from "../components";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const StyledCard = styled(Card)({
  maxWidth: 1600,
  maxHeight: 200,
  marginLeft: 5,
  marginRight: 5,
  marginBottom: 20,
});

const FeedbackCard = ({
  title,
  subheader,
  avatarColor,
  content,
  onDeleteClick,
}) => {
  const [deleteConfirmationVisible, setDeleteConfirmationVisible] =
    React.useState(false);
  const [deleteIconVisible, setDeleteIconVisible] = React.useState(false);

  const handleDeleteConfirm = () => {
    // Implement the delete functionality here
    // For example, you can delete the feedback from the backend
    // After successful deletion, you can navigate away or show a success message
    alert("Feedback deleted!");
    setDeleteConfirmationVisible(false);
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmationVisible(false);
  };

  const handleDeleteIconClick = () => {
    setDeleteIconVisible(!deleteIconVisible);
  };

  return (
    <div>
      
        <StyledCard>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: avatarColor }} aria-label="feedback">
                F
              </Avatar>
            }
            action={
              <React.Fragment>
                <IconButton
                  onClick={() => setDeleteIconVisible(!deleteIconVisible)}
                  aria-label="options"
                >
                  <MoreVertOutlinedIcon />
                </IconButton>
                {deleteIconVisible && (
                  <IconButton
                    onClick={() => {
                      setDeleteConfirmationVisible(true);
                    }}
                    aria-label="delete"
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                )}
              </React.Fragment>
            }
            title={title}
            subheader={subheader}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </StyledCard>

        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteConfirmationVisible} onClose={handleDeleteCancel}>
          <DialogTitle>
            Are you sure you want to delete this Feedback?
          </DialogTitle>
          <DialogContent>
            {/* You can add more content to the dialog if needed */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteCancel} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                onDeleteClick();
                handleDeleteConfirm();
              }}
              color="secondary"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      
    </div>
  );
};

export default FeedbackCard;
