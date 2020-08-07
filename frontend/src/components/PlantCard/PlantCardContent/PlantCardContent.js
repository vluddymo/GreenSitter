import CardContent from "@material-ui/core/CardContent";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import PlantCardContentGallery from "./PlantCardContentGallery/PlantCardContentGallery";
import BasicPlantData from "./PlantCardContentEntry/BasicPlantData";

const useStyles = makeStyles({
  detailsContent: {
    display: 'flex',
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    boxShadow: "-8px -8px 8px #fff inset, 8px 8px 8px rgba(174,170,192,0.4) inset",
    borderRadius: 15,
    flexDirection: "column",
    overflowY: "scroll",
  },
});


export default function PlantCardContent({plant}) {

  const classes = useStyles();

  return (

      <>
        <CardContent className={classes.detailsContent}>
          <BasicPlantData plant={plant}/>
          { plant.images.flower != null && <PlantCardContentGallery images={plant.images.flower}/>}
        </CardContent>
      </>

  )

}