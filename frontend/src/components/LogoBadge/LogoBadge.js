import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GreenSitterLogo from "./GreenSitterLogo/GreenSitterLogo";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: "transparent",
    boxShadow: "-10px -10px 25px #fff, 10px 10px 25px rgba(174,170,192,0.4), 10px 10px 10px #fff inset, -10px -10px 10px rgba(174,170,192,0.25) inset",
    width: 160,
    maxHeight: 160,
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    flexGrow: 1,
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
  },
  logoBox: {
    background: "transparent",
    padding: theme.spacing(0),
    height: 140,
    width: 140,
    borderRadius: "50%",
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    margin: "auto",
  },
}));

export default function LogoBadge() {

  const classes = useStyles();

  return (
      <Paper className={classes.paper}>
        <Box className={classes.logoBox}>
          <GreenSitterLogo/>
        </Box>
      </Paper>
  );
}