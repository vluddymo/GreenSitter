import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import React from "react";
import {useHistory} from "react-router-dom";

export default function AddingButton() {

  const history = useHistory();

  return (

      <Fab color="primary"
           aria-label="add"
           onClick={() => history.push("/plant/add")}
      >
        <AddIcon/>
      </Fab>

  )

}