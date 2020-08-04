import GreenSitterAppBar from "../../../GreenSitterAppBar/GreenSitterAppBar";
import React from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  container: {

    maxWidth: "80%",
    maxHeight: 70,
    padding: 5,
    background: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    boxShadow: '-8px -8px 8px #fff, 8px 8px 8px rgba(144,153,142, 0.7)',

  }
}));

export default function Footer() {

  const classes = useStyles();
  return (
      <Container maxWidth={"md"} component={"footer"} className={classes.container}>
        <GreenSitterAppBar/>
      </Container>
  )

}