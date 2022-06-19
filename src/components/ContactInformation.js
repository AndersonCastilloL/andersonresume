import React from "react";
import Photo from "../assets/photo.jpg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import GridItem from "./GridItem";
import Grid from "@mui/material/Grid";
import "../styles/ContactInformation.css";

const ContactInformation = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="grid-content"
      >
        <Grid item xs={2}>
          <img className="img-photo" src={Photo} alt="Foto de perfil" />
        </Grid>
        <Grid item xs={7}>
          <Grid item>
            <h2 className="name-bar">Anderson Castillo</h2>
          </Grid>
          <Grid item>
            <h4 className="profession-bar">Software Developer</h4>
          </Grid>

          <Grid item className="line-occupation"></Grid>
        </Grid>
        <Grid item xs={3}>
          <GridItem
            icon={<EmailIcon className="icon" />}
            name="Email: anderson.castillo@pucp.edu.pe"
          />
          <GridItem
            icon={<PhoneAndroidIcon className="icon" />}
            name="Phone: +51 902 381 805"
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item className="triangulo-equilatero-left"></Grid>
        <Grid item className="triangulo-equilatero-right"></Grid>
      </Grid>
    </>
  );
};

export default ContactInformation;
