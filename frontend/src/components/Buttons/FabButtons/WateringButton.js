import OpacityOutlinedIcon from "@material-ui/icons/OpacityOutlined";
import Fab from "@material-ui/core/Fab";
import React from "react";
import {useHistory} from "react-router-dom";


export default function WateringButton() {

  const history = useHistory();

  return (
      <Fab color="secondary"
           aria-label="add"
           onClick={() => history.push("/plant/add")}
      >
        <OpacityOutlinedIcon/>
      </Fab>
  )

}