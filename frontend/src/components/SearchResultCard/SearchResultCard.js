import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import makeStyles from "@material-ui/core/styles/makeStyles";
import pottyPlant from "../../images/pottyPlant.svg"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 5,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  header: {
    title: {
      fontSize: 12
    }
  },
});


export default function SearchResultCard({result}) {

  const noDataString = "No data"
  const image = pottyPlant;
  const classes = useStyles();

  return (
      <Card className={classes.root} key={result.id}>
        <CardHeader
            className={classes.header}
            title={result.scientific_name}
            subheader={result.common_name}
        />
        <CardMedia
            className={classes.media}
            image={result.image_url ? result.image_url : image}
            title={result.scientific_name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Genus: {result.genus ? result.genus : noDataString}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Family: {result.family_common_name ? result.family_common_name : noDataString}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        </CardActions>
      </Card>
  );

}