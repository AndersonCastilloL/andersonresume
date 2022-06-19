import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LinearProgressWithLabel from "./LinearProgressWithLabel";

const SkillItem = ({ skill, rating }) => {
  return (
    <>
      <Grid item className="name-skills">
        {skill}
      </Grid>
      <Box sx={{ width: "100%" }}>
        <LinearProgressWithLabel value={rating} />
      </Box>
    </>
  );
};

const SkillsRating = () => {
  return (
    <Grid item xs={5} className="skills">
      <SkillItem skill={"HTML5 & CSS3"} rating={60} />
      <SkillItem skill={"React"} rating={80} />
      <SkillItem skill={"NodeJS"} rating={50} />
      <SkillItem skill={"MongoDB"} rating={50} />
      <SkillItem skill={"SQL(MySQL / SQL Server)"} rating={70} />
      <SkillItem skill={"AWS"} rating={50} />
      <SkillItem skill={"Tableau"} rating={80} />
      <SkillItem skill={"PowerBI"} rating={60} />
      <SkillItem skill={"Python"} rating={60} />
      <SkillItem skill={"Git"} rating={80} />
    </Grid>
  );
};

export default SkillsRating;
