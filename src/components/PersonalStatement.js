import React from "react";
import Grid from "@mui/material/Grid";
import GridItem from "./GridItem";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import BadgeIcon from "@mui/icons-material/Badge";
import CelebrationIcon from "@mui/icons-material/Celebration";
import Button from "@mui/material/Button";
import "../styles/PersonalStatement.css";

const PersonalStatement = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Grid item xs={5}>
        <Grid item>
          <h3> About us! </h3>
        </Grid>
        <Grid item className="line"></Grid>
        <Grid item className="name">
          I'm Anderson Castillo
        </Grid>
        <Grid item>
          <p>
            I'm a passionate software engineer. I have strong knowledge on BI
            tools, web development (frontend) and also cloud services.
          </p>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              window.open(
                "https://andersonresumebucket.s3.amazonaws.com/ANDERSON's+Resume+(ENG).pdf"
              );
            }}
          >
            Open CV
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={5} className="personal-information">
        <GridItem
          icon={<BadgeIcon className="icon" />}
          name="Name: Anderson Castillo"
        />
        <GridItem
          icon={<CelebrationIcon className="icon" />}
          name="Date of birth: 19 december 1993"
        />
        <GridItem
          icon={<LocationOnIcon className="icon" />}
          name="City: Lima, Perú"
        />
        <a href="https://www.linkedin.com/in/anderson-castillo/">
          <GridItem
            icon={<LinkedInIcon className="icon" />}
            name="LinkedIn: linkedin.com/in/anderson-castillo"
          />
        </a>
        <a href="https://github.com/AndersonCastilloL">
          <GridItem
            icon={<GitHubIcon className="icon" />}
            name="Github: github.com/AndersonCastilloL"
          />
        </a>
      </Grid>
    </Grid>
  );
};

export default PersonalStatement;
