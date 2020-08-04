import Box from "@material-ui/core/Box";
import Logo from "../../../images/Logo200x200.png";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  logoBox: {
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    padding: theme.spacing(0),
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