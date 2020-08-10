import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  spinner: {
    alignSelf: "center",
    margin: "auto",
  }
});

export default function LoadingSpinner() {

  const classes = useStyles();

  return (
      <div className={classes.spinner}>
        <CircularProgress/>
      </div>
  );
}