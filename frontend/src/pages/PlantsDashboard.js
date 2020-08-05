import React, {useContext, useEffect} from "react";
import PlantPreviewCard from "../components/PlantPreviewCard/PlantPreviewCard";
import {fetchPlants} from "../context/plant/plantActions";
import {PlantDispatchContext, PlantStateContext} from "../context/plant/PlantContext";
import Typography from "@material-ui/core/Typography";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import PageTitle from "../components/Containers/PageComponents/PageTitle/PageTitle";
import PageContent from "../components/Containers/PageComponents/PageContent/PageContent";
import WateringButton from "../components/Buttons/FabButtons/WateringButton";
import AddingButton from "../components/Buttons/FabButtons/AddingButton";


const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    height: "min-content",
  },
  buttonBox: {
    position: 'absolute',
    zIndex: 1,
    bottom: 20,
    left: 0,
    right: 0,
    margin: 'auto',
    display: "flex",
    justifyContent: "space-around",
    width: "50%",
  },
});

export default function PlantsDashboard() {

  const classes = useStyles();
  const {plants, fetchStatus} = useContext(PlantStateContext);
  const dispatch = useContext(PlantDispatchContext);

  useEffect(() => {
    fetchPlants(dispatch);
  }, [dispatch]);


  return (

      <PageContent>
        <PageTitle title={"My Shelve"}/>
          {plants.map((plant) => (
                <PlantPreviewCard
                    key={plant.nickName}
                    plant={plant}
                />
          ))}

          {fetchStatus === 'PENDING' && <LoadingSpinner/>}
          {fetchStatus === 'FAILED' && (
              <Typography variant="body1" color="error" component="p">
                Fetch Plants failed
              </Typography>
          )}
          <Box className={classes.buttonBox}>
            <AddingButton/>
            <WateringButton/>
          </Box>
      </PageContent>
  )
}
