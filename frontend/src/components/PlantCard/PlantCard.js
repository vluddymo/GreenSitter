import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import PlantCardBadge from "./PlantCardBadge/PlantCardBadge";
import PlantCardHeader from "./PlantCardHeader/PlantCardHeader";
import PlantCardContent from "./PlantCardContent/PlantCardContent";
import PlantCardActions from "./PlantCardActions/PlantCardActions";

const useStyles = makeStyles({
  plantDetailCard: {
    width: "90%",
    '@media (min-width: 426px)': {
      maxWidth: "md",
    },
    alignSelf: "center",
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
  }
});

export default function PlantCard({plant}) {

  const classes = useStyles();

  return (
          <Box className={classes.plantDetailCard}>
            <PlantCardBadge plant={plant}/>
            <PlantCardHeader plantName={plant.plantName}/>
            <PlantCardContent plant={plant}/>
            <PlantCardActions plantId={plant.id}/>
          </Box>
  );

}