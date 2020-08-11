import React, {useContext, useEffect, useState} from "react";
import SearchResultCard from "../components/SearchResultCard/SearchResultCard";
import Grid from "@material-ui/core/Grid";
import {ApiSearchDispatchContext, ApiSearchStateContext} from "../context/apiSearch/ApiSearchContext";
import {fetchSearchResults} from "../context/apiSearch/apiSearchActions";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import PageContent from "../components/PageComponents/PageContent/PageContent";
import {PlantStateContext} from "../context/plant/PlantContext";
import SearchInputBox from "../components/Containers/InputBox/SearchInputBox";
import SearchPlantsButton from "../components/Buttons/FabButtons/SearchPlantsButton";

export default function AddPlantPage() {

  const [query, setQuery] = useState("");
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const dispatch = useContext(ApiSearchDispatchContext);
  const {results, fetchStatus} = useContext(ApiSearchStateContext);
  const {addStatus} = useContext(PlantStateContext);


  useEffect(() => {
    if (query.length > 3) {
      fetchSearchResults(dispatch, query);
      setSearchResult(results)
    }
  }, [dispatch, query, results]);

  useEffect(() => {
    if (addStatus === "SUCCESS") {
      setSearchResult([])
    }
  }, [addStatus]);

  function handleOnInputChange(event) {
    setInput(event.target.value);
  }


  return (
      <PageContent>
        <Grid container justify={"center"}>
          <SearchInputBox>
            <TextField
                id="Search Input"
                label="Find your plant"
                placeholder="sunflower"
                multiline={false}
                onChange={handleOnInputChange}
            />
          <SearchPlantsButton input={input} setQuery={setQuery} />
          </SearchInputBox>
          {searchResult.map(result => (
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
      </PageContent>

  )

}

