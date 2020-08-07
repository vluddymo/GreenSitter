import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import PictureBadge from "./PictureBadge/PictureBadge";
import PlantCardHeader from "./PlantCardHeader/PlantCardHeader";
import PlantCardContent from "./PlantCardContent/PlantCardContent";
import PlantCardActions from "./PlantCardActions/PlantCardActions";

const useStyles = makeStyles({
  plantDetailCard: {
    width: "90%",
    '@media (min-width: 426px)': {
      maxWidth: "md",
    },
    height: "100%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "column"
  }
});

export default function PlantCard({plant}) {

  const classes = useStyles();

  return (
      <Box className={classes.plantDetailCard}>
        <PictureBadge plant={plant}/>
        <PlantCardHeader plantNickname={plant.nickName}/>
        <PlantCardContent plant={plant}/>
       <PlantCardActions plantNickname={plant.nickName}/>
      </Box>
  );

}