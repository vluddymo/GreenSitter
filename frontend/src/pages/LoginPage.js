import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import Container from "@material-ui/core/Container";
import LogoBadge from "../components/LogoBadge/LogoBadge";


const useStyles = makeStyles({
  container: {
    background: "transparent",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 0,
    alignContent: "center",

  },
});

function LoginPage() {

  const classes = useStyles();

  return (

      <Container className={classes.container}>
        <LogoBadge/>
        <LoginForm/>
      </Container>

  );
}

export default LoginPage;
