import CardContent from "@material-ui/core/CardContent";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import PlantCardContentEntry from "./PlantCardContentEntry/PlantCardContentEntry";

const useStyles = makeStyles({
  detailsContent: {
    display: 'flex',
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexGrow: 1,
    boxShadow: "-8px -8px 8px #fff inset, 8px 8px 8px rgba(174,170,192,0.4) inset",
    borderRadius: 15,
    flexDirection: "column",
    overflowY: "scroll",
  },
});


export default function PlantCardContent({plant}) {

  const classes = useStyles();

  return (

      <CardContent className={classes.detailsContent}>
        <PlantCardContentEntry plantAttribute={plant.commonName} title={"Common Name"}/>
        <PlantCardContentEntry plantAttribute={plant.scientificName} title={"Scientific Name"}/>
        <PlantCardContentEntry plantAttribute={plant.genus} title={"Genus"}/>
        <PlantCardContentEntry plantAttribute={plant.familyCommonName} title={"Family"}/>
      </CardContent>

  )

}