import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import WateringStatusCircular from "../../WateringStatus/WateringStatusCircular";

const useStyles = makeStyles((theme) => ({
  badge: {
    background: "#f0f0f3",
    boxShadow: "-10px -10px 24px #fff, 10px 10px 24px rgba(174,170,192,0.4), 10px 10px 10px #fff inset, -10px -10px 10px rgba(174,170,192,0.25) inset",
    minWidth: 200,
    height: 200,
    margin: "auto" ,
    marginTop: theme.spacing(2),
    flexGrow: 0,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignSelf: "center",
    position: "relative",
    zIndex: 1
  },
  imageBox: {
    borderRadius: "50%",
    zIndex: 1000,
    width: 140,
    height: 140,
    position: "relative",
    margin: "auto",
    marginTop: 15
  },
}));

export default function PlantCardBadge({plant}) {

  const classes = useStyles();

  return (
      <Paper className={classes.badge}>
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
            <CardMedia className={classes.imageBox}
                       image={plant.imageUrl}
                       title={plant.nickName}/>
            <WateringStatusCircular wateringStatus={plant.wateringStatus}/>
          </div>
        </div>
      </Paper>
  );
}