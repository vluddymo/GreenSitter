import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 15,
    margin: theme.spacing(0),
    marginTop: theme.spacing(3),
    alignSelf: "flex-end",
  },
}));

const WateringStatusProgress = withStyles({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "rgba(184,199,219,0.85)",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "rgba(40,103,186,0.81)",
  },
})(LinearProgress);

export default function WateringStatusLinear({wateringStatus}) {

  const classes = useStyles();

  return (
      <div className={classes.root}>
        <WateringStatusProgress variant="determinate" value={wateringStatus} className={classes.linear}/>
      </div>
  );
}