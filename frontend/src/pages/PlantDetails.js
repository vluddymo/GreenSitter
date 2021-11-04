import React, {useEffect, useState} from "react";
import PlantCard from "../components/PlantCard/PlantCard";
import PageContent from "../components/PageComponents/PageContent/PageContent";
import {useParams} from "react-router";
import {fetchPlantById} from "../utils/plantsUtils";

export default function PlantDetails() {

  const {id} = useParams();
  const [plant, setPlant] = useState();

  useEffect(() => {
    fetchPlantById(id)
        .then((data) => setPlant(data))
        .catch((e) => console.error(e))
  },[id])


  return (

  <PageContent>
      <>{plant && <PlantCard plant={plant}/>}</>
  </PageContent>

)
}