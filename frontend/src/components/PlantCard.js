import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    margin: 10,
    backgroundColor: 'lightgray',
    '&:hover': {
      backgroundColor: 'rgb(7, 177, 77, 0.42)',
    },
  },
});


export default function PlantCard({plant}) {

  const classes = useStyles();

  return (
      <Grid item xs={10} sm={6} lg={3}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body1" component="p">
            {plant.name}
          </Typography>
        </CardContent>
      </Card>
      </Grid>
  )

}