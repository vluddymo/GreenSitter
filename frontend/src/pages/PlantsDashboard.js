import React, {useContext, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import PlantPreviewCard from "../components/PlantPreviewCard/PlantPreviewCard";
import {fetchPlants} from "../context/plant/plantActions";
import {PlantDispatchContext, PlantStateContext} from "../context/plant/PlantContext";
import Typography from "@material-ui/core/Typography";
import {useHistory} from 'react-router-dom';
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import AddIcon from '@material-ui/icons/Add';
import OpacityOutlinedIcon from '@material-ui/icons/OpacityOutlined';
import Fab from "@material-ui/core/Fab";


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    height: "min-content",
  },
  pageTitle: {
    maxWidth: "90%",
    height: "min-content",
    backgroundColor: "rgb(73, 139, 104)",
    textAlign: "center",
    paddingTop: 20,
    borderRadius: 40,
    flex: '1 0 auto',
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    color: "rgb(148,184,165)",
    color2: "rgb(210,227,207)",
    color23: "rgb(39,73,55)",
    marginBottom: theme.spacing(3),
    boxShadow: ' 5px 5px 8px rgb(39,73,55),' +
        ' -5px -5px 8px rgb(210,227,207)',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    bottom: 30,
    left: 0,
    right: 0,
    margin: 'auto',
    display: "flex",
    justifyContent: "space-around",
    width: "50%",



  },
}));

export default function PlantsDashboard() {

  const classes = useStyles();
  const history = useHistory();
  const {plants, fetchStatus} = useContext(PlantStateContext);
  const dispatch = useContext(PlantDispatchContext);

  useEffect(() => {
    fetchPlants(dispatch);
  }, [dispatch]);


  return (
      <>
        <Grid container className={classes.container}>
          <Box className={classes.pageTitle}>
            <Typography variant={"h3"}>
              My Shelve
            </Typography>
          </Box>
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
          <Box className={classes.fabButton}>
          <Fab color="primary"
               aria-label="add"
               onClick={() => history.push("/plant/add")}
          >
            <AddIcon/>
          </Fab>
          <Fab color="secondary"
               aria-label="add"
               onClick={() => history.push("/plant/add")}
          >
            <OpacityOutlinedIcon/>
          </Fab>
          </Box>
        </Grid>
      </>
  )

}

/*<Fab color="primary"
               aria-label="add"
               className={classes.fabButton}
               onClick={() => history.push("/plant/add")}
          >
            <OpacityOutlinedIcon/>
          </Fab>*/