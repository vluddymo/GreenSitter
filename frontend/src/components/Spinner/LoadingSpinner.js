import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  spinner: {
    boxShadow: "-10px -10px 24px #fff, 10px 10px 24px rgba(174,170,192,0.4), 10px 10px 10px #fff inset, -10px -10px 10px rgba(174,170,192,0.25) inset",
    minWidth: 200,
    height: 200,
    margin: "auto" ,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    flexGrow: 0,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignSelf: "center",
    position: "relative",
    zIndex: 1
  }
}));

export default function LoadingSpinner() {

  const classes = useStyles();

  return (
      <div className={classes.spinner}>
        <div
            style={{
              display: "flex",
              width: "90%",
              height: "90%",
              justifyContent: "center",
              alignSelf: "center"
            }}>
          <div
              style={{
                width: 170,
                height: 170,
                alignSelf: "center",
                justifyContent: "center",
                alignContent: "center",
                overflow: "hidden"
              }}
          >
            <CircularProgress size={170}/>
          </div>
        </div>
      </div>
  );
}