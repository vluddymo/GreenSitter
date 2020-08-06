import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    width: "max-content",
    padding: theme.spacing(1),
    alignSelf: "center"

  }
}));

export default function PlantCardHeader({plantNickname}) {

  const classes = useStyles();

  return (

      <CardHeader
          className={classes.cardHeader}
          title={
            <Typography variant={"h3"} color={"secondary"}>
              {plantNickname}
            </Typography>
          }
      />

  )

}