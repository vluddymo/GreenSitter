import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  detailsContent: {
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1,
  },
});


export default function PlantCardDetailsContent({plant}) {

  const classes = useStyles();

  return (

      <CardContent className={classes.detailsContent}>
        <Typography variant="h4" component="p">
          {plant.commonName}
        </Typography>
      </CardContent>

  )

}