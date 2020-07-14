import React, {useContext, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import PlantCard from "../components/PlantCard";
import {fetchPlants} from "../context/plant/plantActions";
import {PlantDispatchContext, PlantStateContext} from "../context/plant/PlantContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

export default function PlantsDashboard() {

  const {plants, fetchStatus} = useContext(PlantStateContext);
  const dispatch = useContext(PlantDispatchContext);

  useEffect(() => {
    if (!fetchStatus) {
      fetchPlants(dispatch);
    }
  }, [fetchStatus, dispatch]);


  return (
      <>
        {fetchStatus === 'PENDING' && <CircularProgress/>}
        {fetchStatus === 'FAILED' && (
            <Typography variant="body1" color="error" component="p">
              Fetch Plants failed
            </Typography>
        )}
        <Grid container justify={'center'}>
          {plants.map((plant) => (
              <PlantCard
                  key={plant.name}
                  plant={plant}
              />
          ))}
        </Grid>
      </>
  )

}