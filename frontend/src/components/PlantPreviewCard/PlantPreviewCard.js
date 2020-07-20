import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import pottyPlant from "./../../images/pottyPlant.svg"


const useStyles = makeStyles({
  root: {
    margin: 10,
    display: 'flex',
    height: 150,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'rgb(7, 177, 77, 0.42)',
    },
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    maxWidth: 130,
    height: "80%",
    margin: 10,
  },
  title: {
    height: "1%",
  },
});


export default function PlantPreviewCard({plant}) {

  const classes = useStyles();
  const image = pottyPlant;

  return (
      <Grid container justify={"center"}>
        <Grid item xs={10}>
          <Card className={classes.root}>
            <Grid item xs={4} sm={3} md={2}>
              <CardMedia className={classes.cover} title="potty plant" image={image}/>
            </Grid>
              <Grid item xs={9}>
                <CardContent>
                  <Typography variant="body1" component="p" className={classes.title}>
                    {plant.name}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={3}>
                <CardContent>
                </CardContent>
              </Grid>
          </Card>
        </Grid>
      </Grid>
  )

}