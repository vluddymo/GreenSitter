import Container from "@material-ui/core/Container";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  container: {
    background: "transparent",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 0,
    alignContent: "center",
    overflowY: "scroll",

  },
});

export default function PageContent({children}) {

  const classes = useStyles();

  return (

      <Container className={classes.container}>
        {children}
      </Container>

  )
}