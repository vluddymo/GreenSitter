import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";

const useStyles = makeStyles((theme) => ({
  spinner: {
    boxShadow: "-10px -10px 24px #fff, 10px 10px 24px rgba(174,170,192,0.4), 10px 10px 10px #fff inset, -10px -10px 10px rgba(174,170,192,0.25) inset",
    maxWidth: 120,
    height: 120,
    margin: "auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    flexGrow: 0,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    position: "relative",
    zIndex: 1
  }
}));

export default function SmallLoadingSpinner() {

  const classes = useStyles();

  return (
      <div className={classes.spinner}>
        <div
            style={{
              display: "flex",
              width: "90%",
              maxHeight: "90%",
              justifyContent: "center",
              alignSelf: "center"
            }}>
          <div
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                justifyContent: "center",
                alignContent: "center",
                overflow: "hidden"
              }}
          >
            <CircularProgress size={100}/>
          </div>
        </div>
      </div>
  );
}