import React from "react";
import Grid from "@mui/material/Grid";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const EducationInformation = () => {
  return (
    <Grid item xs={3}>
      <Grid item className="logo">
        <img
          className="img-education"
          src={process.env.PUBLIC_URL + "./education-icon.svg"}
          alt="Education Logo"
        ></img>
      </Grid>
      <Grid item className="name-category">
        Education
      </Grid>
      <Grid item>
        <Timeline>
          <TimelineItem>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineOppositeContent sx={{ flex: 0.5 }}>
              <div className="time-dot">2011 - 2020</div>
              <div className="name-profession">University</div>
              <div className="time-dot">
                Pontifical Catholic University of Peru
              </div>
            </TimelineOppositeContent>
          </TimelineItem>
        </Timeline>
      </Grid>
    </Grid>
  );
};

export default EducationInformation;
