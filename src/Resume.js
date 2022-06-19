import React from "react";
import ContactInformation from "./components/ContactInformation";
import PersonalStatement from "./components/PersonalStatement";
import EducationAndSkills from "./components/EducationAndSkills";
import Grid from "@mui/material/Grid";
import "./Resume.css";

const Resume = () => {
  return (
    <Grid container>
      <ContactInformation />
      <PersonalStatement />
      <EducationAndSkills />
    </Grid>
  );
};

export default Resume;
