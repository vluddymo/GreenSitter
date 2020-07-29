import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import pottyPlant from "./../../images/pottyPlant.svg"
import HealthStatus from "../HealthStatus/HealthStatus";
import {useHistory} from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    margin: 10,
    display: 'flex',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'rgb(7, 177, 77, 0.42)',
    },
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    height: 0,
    maxWidth: 345,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    height: "1%",
  },
  dock: {
    backgroundColor: "beige",
    flexGrow: 2,
    padding: 4,
    display: "flex",
    justifyContent: "center",
    paddingBottom: 0

  },
});


export default function PlantPreviewCard({plant}) {

  const classes = useStyles();
  const history = useHistory();


  return (
      <Grid container justify={"center"}>
        <Grid item xs={10} sm={11}>
          <Card className={classes.root}
                key={plant.nickName}
                onClick={() => history.push(`/plant/${plant.nickName}`)}
          >
            <Grid container>
              <Grid item xs={11} sm={6}>
                <CardMedia className={classes.cover} title="potty plant"
                           image={plant.imageUrl === "null" ? pottyPlant : plant.imageUrl}/>
              </Grid>
              <Grid item xs={11} sm={5}>
                <CardContent>
                  <Typography variant="h5" component="p" className={classes.title}>
                    {plant.nickName}
                  </Typography>
                  <Typography variant="h6" component="p" className={classes.title}>
                    {plant.scientificName}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
            <Grid item xs={2} sm={1}>
              <CardContent className={classes.dock}>
              <HealthStatus percentage={80}/>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
      </Grid>
  )
}