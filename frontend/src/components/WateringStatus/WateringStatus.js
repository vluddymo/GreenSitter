import {Paper} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  wateringStatus: {
    padding: 3,
    margin: theme.spacing(1),
    borderRadius: 15,
    position: "relative",
    zIndex: -1,
  }
}));

export default function WateringStatus() {

  const classes = useStyles();

  return (
      <Paper className={classes.wateringStatus}>
        <svg width="400" height="110">
          <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)"/>
        </svg>
      </Paper>
  )
}