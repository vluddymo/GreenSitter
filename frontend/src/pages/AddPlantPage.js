import React, {useContext, useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SearchResultCard from "../components/SearchResultCard/SearchResultCard";
import Grid from "@material-ui/core/Grid";
import {ApiSearchDispatchContext, ApiSearchStateContext} from "../context/apiSearch/ApiSearchContext";
import {fetchSearchResults} from "../context/apiSearch/apiSearchActions";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  searchField: {
    margin: "auto"

  }
});

export default function AddPlantPage() {

  const classes = useStyles();
  const [query, setQuery] = useState("");
  const dispatch = useContext(ApiSearchDispatchContext);
  const {results, fetchStatus} = useContext(ApiSearchStateContext);


  useEffect(() => {
    if (query.length > 3) {
      fetchSearchResults(dispatch, query)
    }
  }, [dispatch, query]);

  function handleOnInputChange(event) {
    setQuery(event.target.value);
  }


  return (
      <>
        <Grid container justify={"center"}>
          <Grid item xs={4}>
            <input id="search-input"
                   className={classes.searchField}
                   value={query}
                   type={"text"}
                   onChange={handleOnInputChange}/>
          </Grid>
        </Grid>
        <Grid container justify={"center"}>
          {results.map(result => (
                  <Grid item xs={10} sm={6} md={4} lg={3} key={result.id}>
                    <SearchResultCard result={result}/>
                  </Grid>
              )
          )}
          {fetchStatus === 'PENDING' && <LoadingSpinner/>}
          {fetchStatus === 'FAILED' && (
              <Typography variant="body1" color="error" component="p">
                Fetch Results failed
              </Typography>
          )}
        </Grid>
      </>

  )

}

