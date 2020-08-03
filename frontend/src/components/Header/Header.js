import Container from "@material-ui/core/Container";
import React from "react";
import GreenSitterLogo from "../GreenSitterLogo/GreenSitterLogo";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  container: {
    maxWidth: 800,
    maxHeight: 100,
    borderColor: "#f4ac3d",
    display: "flex",
    justifyContent: "center",
    position: "static",
  }
});

export default function Header() {

  const classes = useStyles();

  return (

      <Container maxWidth={'md'} component="header" className={classes.container}>
        <GreenSitterLogo/>
      </Container>

  )
};