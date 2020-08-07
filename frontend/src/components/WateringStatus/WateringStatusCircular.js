import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  circularStatus: {
    zIndex: 0,
    alignSelf: "center",
    position: "absolute",
  }
})

export default function WateringStatusCircular({wateringStatus}) {

  const classes = useStyles()

  return <CircularProgress
      variant="static"
      value={wateringStatus}
      className={classes.circularStatus}
      size={175}
      thickness={2}
  />

}