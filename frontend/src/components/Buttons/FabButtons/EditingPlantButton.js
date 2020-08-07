import EditIcon from '@material-ui/icons/Edit';
import Fab from "@material-ui/core/Fab";
import React from "react";

export default function EditingPlantButton() {

  return (

      <Fab color="primary"
           aria-label="add"
      >
        <EditIcon/>
      </Fab>

  )

}