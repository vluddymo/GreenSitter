import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import makeStyles from "@material-ui/core/styles/makeStyles";
import pottyPlant from "../../images/pottyPlant.svg";
import "fontsource-roboto";
import AddPlantDialog from "../AddPlantDialog/AddPlantDialog";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    boxShadow: "-8px -8px 16px #fff, 8px 8px 16px rgba(174,170,192,0.4)",
    borderRadius: 12,
    backgroundColor: "transparent",
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    borderRadius: 10,
  },
  header: {
    title: {
      fontSize: 12
    }
  },
}));


export default function SearchResultCard({result}) {


  const noDataString = "No data"
  const image = pottyPlant;
  const classes = useStyles();
  const [showAddDialog, setShowAddDialog] = useState(false)


  return (
      <Card className={classes.root} key={result.id}>
        <CardMedia
            className={classes.media}
            image={result.image_url ? result.image_url : image}
            title={result.scientific_name}
        />
        <CardContent>
          <Typography variant={"h5"}>{result.scientific_name}</Typography>
          <Typography variant="h6">{result.common_name ? result.common_name : "-"}</Typography>
          <Typography variant="body2" component="p">
            Genus: {result.genus ? result.genus : noDataString}
          </Typography>
          <Typography variant="body2" component="p">
            Family: {result.family_common_name ? result.family_common_name : noDataString}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button onClick={() => setShowAddDialog(true)}>Add to Shelve</Button>
          <AddPlantDialog
              open={showAddDialog}
              handleClose={() => setShowAddDialog(false)}
              result={result}
          >
          </AddPlantDialog>
        </CardActions>
      </Card>
  );
}