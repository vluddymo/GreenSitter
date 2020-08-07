import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import React, {useContext} from "react";
import {useHistory} from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import {removePlant} from "../../../context/plant/plantActions";
import {PlantDispatchContext} from "../../../context/plant/PlantContext";

export default function DeletingPlantButton({plantNickname}) {

  const history = useHistory();
  const dispatch = useContext(PlantDispatchContext);

  function handleClick(event) {
    event.stopPropagation();
    removePlant(dispatch, plantNickname)
        .then(() => (history.push("/")));
  }


  return (

      <Fab color="primary"
           aria-label="add"
           onClick={handleClick}
      >
        <DeleteOutlineIcon/>
      </Fab>

  )

}