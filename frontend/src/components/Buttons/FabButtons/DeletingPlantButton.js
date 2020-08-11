import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import React, {useContext} from "react";
import {useHistory} from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import {removePlant} from "../../../context/plant/plantActions";
import {PlantDispatchContext} from "../../../context/plant/PlantContext";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  fab: {
    backgroundColor: theme.palette.error.main,
    color: "white",
  }
}))


export default function DeletingPlantButton({plantNickname}) {

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useContext(PlantDispatchContext);

  function handleClick(event) {
    event.stopPropagation();
    removePlant(dispatch, plantNickname)
        .then(() => (history.push("/")));
  }


  return (

      <Fab className={classes.fab}
           aria-label="add"
           onClick={handleClick}
      >
        <DeleteOutlineIcon/>
      </Fab>

  )

}