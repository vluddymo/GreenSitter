import React, {useContext, useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SearchResultCard from "../components/SearchResultCard/SearchResultCard";
import Grid from "@material-ui/core/Grid";
import {ApiSearchDispatchContext, ApiSearchStateContext} from "../context/apiSearch/ApiSearchContext";
import {fetchSearchResults} from "../context/apiSearch/apiSearchActions";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles({
  searchBox: {
    maxWidth: 350,
    justifyContent: "center",
    display: "flex",
    marginBottom: 10,
    marginTop: 10,
  },
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
          <Box className={classes.searchBox}>
            <TextField
                id="Search Input"
                label="Find your plant"
                placeholder="sunflower"
                multiline
                variant="outlined"
                onChange={handleOnInputChange}
            />
          </Box>
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

