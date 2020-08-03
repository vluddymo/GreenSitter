import GreenSitterAppBar from "../GreenSitterAppBar/GreenSitterAppBar";
import React from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  container: {
    maxWidth: 800,
    maxHeight: 100,
    padding: 5,
    background: "rgb(170,200,165)",
    display: "flex",
    justifyContent: "center",
  }
});

export default function Footer() {

  const classes = useStyles();
  return (
      <Container maxWidth={"md"} component={"footer"} className={classes.container}>
      <GreenSitterAppBar/>
      </Container>
  )

}