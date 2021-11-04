import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import pottyPlant from "./../../images/pottyPlant.svg"
import {useHistory} from 'react-router-dom';
import WateringStatusLinear from "../WateringStatus/WateringStatusLinear";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "min-content",
    margin: "0 auto",
    padding: 5,
    backgroundColor: "transparent",
  },
  item: {
    borderRadius: 12,
    backgroundColor: "transparent",
    boxShadow: "-8px -8px 16px #fff, 8px 8px 16px rgba(174,170,192,0.4)",
    margin: theme.spacing(1),
    padding: theme.spacing(1.2),
  },
  root: {
    backgroundColor: "transparent",
    position: "sticky",
    maxHeight: 80,
    '@media (min-width: 599px)': {
      maxHeight: 150,
      margin: theme.spacing(3),
    },
    display: 'flex',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    transition: "0.5s",
    outlines: "none",
    boxShadow: "none",
    borderRadius: 10,
  },
  content: {
    flex: '1 0 auto',
    padding: theme.spacing(1),
    paddingBottom: 0,
    alignContent: "center",
  },
  cover: {
    height: 0,
    paddingTop: '105%',
  },
  title: {
    height: "1%",
  },
}));


export default function PlantPreviewCard({plant}) {

  const classes = useStyles();
  const history = useHistory();


  return (
      <Grid container justifyContent={"center"} className={classes.container}>
        <Grid item xs={9} sm={10} className={classes.item}>
          <Card className={classes.root}
                key={plant.id}
                onClick={() => history.push(`/plant/${plant.id}`)}
          >
            <Grid container>
              <Grid item xs={4} lg={5}>
                <CardMedia className={classes.cover}
                           title="potty plant"
                           image={plant.imageUrl === "null" ? pottyPlant : plant.imageUrl}/>
              </Grid>
              <Grid item xs={8} sm={8}>
                <CardContent className={classes.content}>
                  <Typography variant="h5" component="p" className={classes.title}>
                    {plant.plantName}
                  </Typography>
                  <Typography variant="h6" component="p" className={classes.title}>
                    {plant.commonNames[0]}
                  </Typography>
                  <WateringStatusLinear wateringStatus={plant.wateringStatus}/>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
  )
}