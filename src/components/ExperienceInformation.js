import React from "react";
import Grid from "@mui/material/Grid";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const CustomTimeLineContent = ({ year, position, company }) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot variant="outlined" color="primary" />
        <TimelineConnector className="time-line-connector" />
      </TimelineSeparator>
      <TimelineOppositeContent sx={{ flex: 0.6 }}>
        <div className="time-dot">{year}</div>
        <div className="name-profession">{position}</div>
        <div className="time-dot">{company}</div>
      </TimelineOppositeContent>
    </TimelineItem>
  );
};

const ExperienceInformation = () => {
  return (
    <Grid item xs={10} sm={5} md={3}>
      <Grid item className="logo">
        <img
          className="img-experience"
          src={process.env.PUBLIC_URL + "./work-experience-icon.svg"}
          alt="Education Logo"
        ></img>
      </Grid>
      <Grid item className="name-category">
        Experience
      </Grid>
      <Grid item>
        <Timeline>
          <CustomTimeLineContent
            year={"2021 - Present"}
            position={"React Developer"}
            company={"Permanent / Freelancer"}
          />
          <CustomTimeLineContent
            year={"2020 - 2022"}
            position={"Digital Forecast Analyst"}
            company={"Belcorp Corporation"}
          />
          <CustomTimeLineContent
            year={"2018 - 2020"}
            position={"Software Developer Intern"}
            company={"Belcorp Corporation"}
          />
          <CustomTimeLineContent
            year={"05/2017 - 12/2017"}
            position={"IT Intern"}
            company={"Credit Bank of Peru"}
          />
        </Timeline>
      </Grid>
    </Grid>
  );
};

export default ExperienceInformation;
