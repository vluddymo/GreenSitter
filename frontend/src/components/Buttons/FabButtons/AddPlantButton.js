import Fab from "@material-ui/core/Fab";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  searchButton: {
    alignSelf: "center",
    borderRadius: "50%",
    padding: theme.spacing(1.3),
    boxShadow: "-5px -5px 15px #fff, 5px 5px 15px rgba(174,170,192,0.4), 5px 5px 5px #fff inset, -5px -5px 5px rgba(174,170,192,0.25) inset",
  },
  fab: {
    boxShadow: "none",
  }
}));

export default function AddPlantButton({handleSubmit}) {

  const classes = useStyles();

  return (

      <div className={classes.searchButton}>
        <Fab color="primary"
             aria-label="add"
             onClick={handleSubmit}
             size={"small"}
             className={classes.fab}
        >
          <AddIcon/>
        </Fab>
      </div>

  )
}
