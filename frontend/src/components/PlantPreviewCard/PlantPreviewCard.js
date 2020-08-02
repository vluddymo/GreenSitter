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


const useStyles = makeStyles({
  root: {
    margin: 10,
    maxHeight: 150,
    borderRadius: 15,
    display: 'flex',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'rgb(7, 177, 77, 0.42)',
    },
  },
  content: {
    flex: '1 0 auto',
    margin: 6,
    padding: 0,
    alignContent: "center",
  },
  cover: {
    height: 0,
    paddingTop: '100%', // 16:9
    margin: 0,
    borderRadius: 10,
  },
  title: {
    height: "1%",
  },
});


export default function PlantPreviewCard({plant}) {

  const classes = useStyles();
  const history = useHistory();


  return (
      <Grid container justify={"center"} >
        <Grid item xs={11} sm={11}>
          <WateringStatus>
          <Card className={classes.root}
                key={plant.nickName}
                onClick={() => history.push(`/plant/${plant.nickName}`)}
                backgroun
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
                    {plant.scientificName}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
          </WateringStatus>
        </Grid>
      </Grid>
  )
}