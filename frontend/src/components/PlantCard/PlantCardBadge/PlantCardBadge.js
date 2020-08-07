import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import WateringStatusCircular from "../../WateringStatus/WateringStatusCircular";

const useStyles = makeStyles((theme) => ({
  badge: {
    background: "#f0f0f3",
    boxShadow: "-10px -10px 24px #fff, 10px 10px 24px rgba(174,170,192,0.4), 10px 10px 10px #fff inset, -10px -10px 10px rgba(174,170,192,0.25) inset",
    width: 200,
    height: 200,
    margin: theme.spacing(3),
    flexGrow: 0,
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
  },
  imageBox: {
    padding: theme.spacing(0),
    height: "75%",
    width: "75%",
    borderRadius: "50%",
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    margin: "auto",
    zIndex: 1
  },
}));

export default function PlantCardBadge({plant}) {

  const classes = useStyles();

  return (
      <Paper className={classes.badge}>
        <WateringStatusCircular wateringStatus={plant.wateringStatus}/>
          <CardMedia className={classes.imageBox}
                     image={plant.imageUrl}
                     title={plant.nickName}/>
      </Paper>
  );
}