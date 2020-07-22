import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {fetchSearchQuery} from "../utils/api-Utils";
import SearchResultCard from "../components/SearchResultCard/SearchResultCard";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles({
  searchField: {
    margin: "auto"

  }
});

export default function AddPlantPage() {

  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length > 3) {
      fetchSearchQuery(query).then(response => setResults(response))
    }
  }, [query]);

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
        </Grid>
      </>

  )

}

