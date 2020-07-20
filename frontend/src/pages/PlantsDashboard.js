import React, {useContext, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import PlantPreviewCard from "../components/PlantPreviewCard/PlantPreviewCard";
import {fetchPlants} from "../context/plant/plantActions";
import {PlantDispatchContext, PlantStateContext} from "../context/plant/PlantContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from 'react-router-dom';

export default function PlantsDashboard() {

  const history = useHistory();
  const {plants, fetchStatus} = useContext(PlantStateContext);
  const dispatch = useContext(PlantDispatchContext);

  useEffect(() => {
    if (!fetchStatus) {
      fetchPlants(dispatch);
    }
  }, [fetchStatus, dispatch]);


  return (

        <Grid container justify={'center'}>
          {plants.map((plant) => (
              <PlantPreviewCard
                  key={plant.name}
                  plant={plant}
              />
          ))}
          <Button
              variant="outlined"
              color="primary"
              onClick={() => history.push("/plant/add")}
          >
            Add Plant
          </Button>
          {fetchStatus === 'PENDING' && <CircularProgress/>}
          {fetchStatus === 'FAILED' && (
              <Typography variant="body1" color="error" component="p">
                Fetch Plants failed
              </Typography>
          )}
        </Grid>

  )

}