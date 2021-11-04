import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    width: "max-content",
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1),
    alignSelf: "center",
    marginBottom: theme.spacing(1),
  }
}));

export default function PlantCardHeader({plantName}) {

  const classes = useStyles();

  return (

      <CardHeader
          className={classes.cardHeader}
          title={
            <Typography variant={"h3"} color={"secondary"}>
              {plantName}
            </Typography>
          }
      />

  )

}