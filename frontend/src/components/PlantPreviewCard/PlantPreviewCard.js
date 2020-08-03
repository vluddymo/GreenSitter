import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import pottyPlant from "./../../images/pottyPlant.svg"
import {useHistory} from 'react-router-dom';
import WateringStatus from "../WateringStatus/WateringStatus";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    position: "sticky",
    margin: theme.spacing(2),
    maxHeight: 80,
    '@media (min-width: 599px)': {
      maxHeight: 150,
      margin: theme.spacing(3),
    },
    borderRadius: 15,
    display: 'flex',
    '&:hover': {
      backgroundColor: 'rgb(215,181,58)',
    },
    transition: "0.5s",
    outlines: "none",
    boxShadow: "none",
  },
  content: {
    flex: '1 0 auto',
    padding: theme.spacing(1),
    paddingBottom: 0,
    alignContent: "center",
  },
  container:{
    height:"min-content",
    margin: "0 auto",
    padding: 5,
  },
  item: {
    borderRadius: 20,
    backgroundColor: "#f0f0f3",
    color1: "rgba(174,170,192,0.4)",
    boxShadow: '-8px -8px 24px #fff, 8px 8px 24px rgba(174,170,192,0.4), -8px -8px 8px rgba(174,170,192,0.25) inset, 8px  8px 8px #fff inset',
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
      <Grid container justify={"center"} className={classes.container}>
        <Grid item xs={11} sm={11} className={classes.item}>
          <Card className={classes.root}
                key={plant.nickName}
                onClick={() => history.push(`/plant/${plant.nickName}`)}
          >
            <Grid container>
              <Grid item xs={4} lg={5} >
                <CardMedia className={classes.cover}
                           title="potty plant"
                           image={plant.imageUrl === "null" ? pottyPlant : plant.imageUrl}/>
              </Grid>
              <Grid item xs={8} sm={7}>
                <CardContent className={classes.content}>
                  <Typography variant="h5" component="p" className={classes.title}>
                    {plant.nickName}
                  </Typography>
                  <Typography variant="h6" component="p" className={classes.title}>
                    {plant.commonName}
                  </Typography>
                </CardContent>
                  <WateringStatus wateringStatus={plant.wateringStatus}/>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
  )
}