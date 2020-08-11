import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  circularStatus: {
    color: "rgba(40,103,186,0.81)",
    transition: "none",
    zIndex: 10,
    marginTop: -155,
    display: "block",
    position: "relative",
    margin: "auto",
  }
})

export default function WateringStatusCircular({wateringStatus}) {

  const classes = useStyles()

  return <CircularProgress
      variant="static"
      value={wateringStatus}
      className={classes.circularStatus}
      size={170}
      thickness={3}
  />

}