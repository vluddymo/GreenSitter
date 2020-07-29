import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React, {useContext} from "react";
import {makeStyles} from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from '@material-ui/icons/Delete';
import green from "@material-ui/core/colors/green";
import EditIcon from '@material-ui/icons/Edit';
import {PlantDispatchContext} from "../../context/plant/PlantContext";
import {removePlant} from "../../context/plant/plantActions";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) =>({
  root: {
    maxWidth: "80%",
    flexGrow: 10,
    margin: 10,
    borderRadius: 15,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  editable: {
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center"
  },
  avatar: {
    backgroundColor: green[500],
  },
}));

export default function PlantCard({plant}) {

  const history = useHistory();
  const classes = useStyles();
  const dispatch = useContext(PlantDispatchContext);

  function handleDelete(event) {
    event.stopPropagation();
    removePlant(dispatch, plant.nickName)
        .then(() => (history.push("/")));
  }


  return (
      <Card className={classes.root}>
        <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {plant.nickName.charAt(0)}
              </Avatar>
            }
            action={
              <IconButton aria-label="delete">
                <EditIcon fontSize={"medium"} color={"primary"}/>
              </IconButton>
            }
            title={
              <Typography variant={"h4"}>
                {plant.nickName}
              </Typography>
            }
        />
        <CardMedia
            className={classes.media}
            image={plant.imageUrl}
            title={plant.nickName}
        />
        <CardContent className={classes.editable}>
          <Typography variant="h5" component="p">
            {plant.commonName}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteIcon color={"error"} fontSize={"large"}/>
          </IconButton>
        </CardActions>

      </Card>
  );

}