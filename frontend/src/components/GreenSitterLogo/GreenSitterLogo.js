import Box from "@material-ui/core/Box";
import Logo from "../../images/Logo200x200.png";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  logoBox: {
    maxWidth: 250,
    margin: "auto",
    marginTop: 15,
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    maxWidth: "100%",
    margin: "auto",
  }
}))


export default function GreenSitterLogo() {

  const classes = useStyles();

  return (
      <Box className={classes.logoBox}>
        <img src={Logo} alt="GreenSitter Logo" className={classes.logo}/>
      </Box>
  );

}