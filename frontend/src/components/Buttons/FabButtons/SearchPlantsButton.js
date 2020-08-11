import Fab from "@material-ui/core/Fab";
import React from "react";
import SearchIcon from '@material-ui/icons/Search';
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

export default function SearchPlantsButton({input, setQuery}) {

  const classes = useStyles();

  return (

      <div className={classes.searchButton}>
        <Fab color="primary"
             aria-label="search"
             onClick={() => setQuery(input)}
             size={"small"}
             className={classes.fab}
        >
          <SearchIcon/>
        </Fab>
      </div>

  )

}