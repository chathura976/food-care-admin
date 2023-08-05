import React, { useState } from 'react';
import Avatar from 'react-avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import PostImg from "../assests/data/logos/login.png";

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="relative w-100 flex flex-col shadow-lg mb-6 mt-12">
      <div className="p-4 flex items-center justify-between">
        <Avatar
          size={40}
          round={true}
          className="bg-red-500"
          name="R"
          aria-label="recipe"
        />
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      </div>
      <img src={PostImg}
        className="h-100 w-full object-cover"
        alt="Paella dish"
      />
      <div className="p-4">
        <p className="text-base text-gray-700">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels if you like.
        </p>
      </div>
      <div className="p-4">
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <button
          onClick={handleExpandClick}
          aria-expanded={expanded}
          className="text-gray-700 transform transition-all duration-200"
        >
          <ExpandMoreIcon
            className={`w-5 h-5 ${expanded ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </div>
      {expanded && (
        <div className="p-4">
          <p className="mb-2">Method:</p>
          <p className="mb-2">
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </p>
          <p className="mb-2">
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </p>
          <p className="mb-2">
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </p>
          <p>Set aside off of the heat to let rest for 10 minutes, and then serve.</p>
        </div>
      )}
    </div>
  );
}
