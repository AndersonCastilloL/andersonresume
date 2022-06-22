import React from "react";
import Grid from "@mui/material/Grid";
import "../styles/GridItem.css";

const GridItem = ({ icon, name }) => {
  return (
    <Grid item xs className="grid-item">
      <p>
        {icon} {name}
      </p>
    </Grid>
  );
};

export default GridItem;
