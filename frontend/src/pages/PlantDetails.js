import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {fetchPlantByNickName} from "../utils/plantsUtils";
import PlantCard from "../components/PlantCard/PlantCard";

export default function PlantDetails() {

  const {nickName} = useParams();

  const [plant, setPlant] = useState();
  useEffect(() => {
    fetchPlantByNickName(nickName)
        .then((data) => setPlant(data))
        .catch((e) => console.error(e));
  }, [nickName]);

  return <>{plant && <PlantCard plant={plant}/>}</>;

}