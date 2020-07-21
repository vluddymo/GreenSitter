import React, {useEffect, useState} from "react";

import {fetchSearchQuery} from "../utils/api-Utils";
import SearchResultCard from "../components/SearchResultCard/SearchResultCard";
import Grid from "@material-ui/core/Grid";


export default function AddPlantPage() {

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
                   value={query}
                   type={"text"}
                   onChange={handleOnInputChange}/>
          </Grid>
        </Grid>
        <Grid container>
          {results.map(result => (
                  <Grid item xs={4} key={result.id}>
                    <SearchResultCard result={result}/>
                  </Grid>
              )
          )}
        </Grid>
      </>

  )

}

