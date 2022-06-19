import React from "react";
import Grid from "@mui/material/Grid";
import SkillsRating from "./SkillsRating";
import ExperienceInformation from "./ExperienceInformation";
import EducationInformation from "./EducationInformation";
import "../styles/EducationAndSkills.css";

const EducationAndSkills = () => {
  return (
    <>
      <Grid container direction="column" className="education-tag">
        <Grid item>
          <h3> Education & Skills </h3>
        </Grid>
        <Grid item className="line-education"></Grid>
      </Grid>
      <Grid container direction="row" justifyContent="center">
        <EducationInformation />
        <ExperienceInformation />
        <SkillsRating />
      </Grid>
    </>
  );
};

export default EducationAndSkills;
