import React from "react";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function Stars() {
  const totalStars = 5;
  const activeStars = 3;

  return (
    <Box>
      {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? (
          <StarIcon key={index} />
        ) : (
          <StarBorderIcon key={index} />
        );
      })}
    </Box>
  );
};
