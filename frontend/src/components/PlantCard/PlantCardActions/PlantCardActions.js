import DeletingPlantButton from "../../Buttons/FabButtons/DeletingPlantButton";
import EditingPlantButton from "../../Buttons/FabButtons/EditingPlantButton";
import ButtonBox from "../../Buttons/FabButtons/ButtonBox/ButtonBox";
import React from "react";


export default function PlantCardActions({plantNickname}) {

  return (

      <ButtonBox>
        <DeletingPlantButton plantNickname={plantNickname}/>
        <EditingPlantButton/>
      </ButtonBox>

  )

}