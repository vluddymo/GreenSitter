import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import PictureBadge from "./PictureBadge/PictureBadge";
import PlantCardHeader from "./PlantCardHeader/PlantCardHeader";
import PlantCardDetailsContent from "./PlantCardDetailsContent/PlantCardDetailsContent";
import PlantCardActions from "./PlantCardActions/PlantCardActions";

const useStyles = makeStyles({
  plantDetailCard: {
    maxWidth: "md",
    minWidth: "80%",
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
        <PlantCardDetailsContent plant={plant}/>
       <PlantCardActions plantNickname={plant.nickName}/>
      </Box>
  );

}