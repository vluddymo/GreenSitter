import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {BrowserRouter} from "react-router-dom";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles({
  content: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    maxWidth: "100%",
    height: "100vh",
  }
})

export default function ContentFrame() {

  const classes = useStyles();

  return (
      <BrowserRouter>
        <Container className={classes.content}>
         <Navigation/>
         <Footer/>
        </Container>
      </BrowserRouter>
  )
}