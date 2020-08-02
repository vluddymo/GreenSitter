import Box from "@material-ui/core/Box";
import Logo from "../../images/Logo200x200.png";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  logoBox: {
    maxWidth: "100%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(1),
    background: "linear-gradient(180deg, rgba(93, 188, 210, 1) 0%, rgba(205, 255, 252, 1) 0%, rgba(255, 255, 255, 1) 100%)",
  },
  logo: {
    maxWidth: "50%",
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