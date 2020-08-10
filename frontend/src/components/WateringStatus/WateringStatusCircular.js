import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  circularStatus: {
    color: "rgba(68,121,193,0.67)",
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