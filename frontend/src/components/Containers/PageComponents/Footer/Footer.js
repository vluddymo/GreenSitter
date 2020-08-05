import GreenSitterAppBar from "../../../GreenSitterAppBar/GreenSitterAppBar";
import React from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  container: {

    maxWidth: "80%",
    maxHeight: 50,
    minHeight: 30,
    padding: 5,
    background: "transparent",
    display: "flex",
    justifyContent: "center",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    boxShadow: "-10px -10px 16px #fff, 10px 10px 16px rgba(174,170,192,0.4)",

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