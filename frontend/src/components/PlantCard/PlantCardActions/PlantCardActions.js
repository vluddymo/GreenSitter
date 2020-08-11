import DeletingPlantButton from "../../Buttons/FabButtons/DeletingPlantButton";
import ButtonBox from "../../Buttons/FabButtons/ButtonBox/ButtonBox";
import React from "react";


export default function PlantCardActions({plantNickname}) {

  return (

      <ButtonBox>
        <DeletingPlantButton plantNickname={plantNickname}/>
      </ButtonBox>

  )

}