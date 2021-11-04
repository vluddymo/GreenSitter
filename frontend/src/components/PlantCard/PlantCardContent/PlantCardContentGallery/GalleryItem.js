import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  badge: {
    background: "#f0f0f3",
    boxShadow: "-8px -8px 16px #fff, 8px 8px 16px rgba(174,170,192,0.4)",
    minWidth: 180,
    height: 180,
    margin: theme.spacing(1),
    flexGrow: 0,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
  },
  imageBox: {
    padding: theme.spacing(0),
    height: "85%",
    width: "85%",
    borderRadius: 15,
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    zIndex: 1
  },
}));

export default function GalleryItem({image}) {

  const classes = useStyles();

  return (

      <Paper className={classes.badge}>
          <CardMedia className={classes.imageBox}
                     image={image.url}
                     src={image.id}
          />
      </Paper>

  )

}