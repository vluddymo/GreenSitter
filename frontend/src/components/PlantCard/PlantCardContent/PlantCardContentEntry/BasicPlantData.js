import PlantCardContentEntry from "./PlantCardContentEntry";
import React from "react";


export default function BasicPlantData({plant}) {


  return (
      <>
        <PlantCardContentEntry plantAttribute={plant.commonName} title={"Common Name"}/>
        <PlantCardContentEntry plantAttribute={plant.scientificName} title={"Scientific Name"}/>
        <PlantCardContentEntry plantAttribute={plant.genus} title={"Genus"}/>
        <PlantCardContentEntry plantAttribute={plant.familyCommonName} title={"Family"}/>
      </>
  )
}