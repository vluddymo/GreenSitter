import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  badge: {
    background: "#f0f0f3",
    boxShadow: "-6px -6px 16px #fff, 6px 6px 16px rgba(174,170,192,0.4), 6px 6px 6px #fff inset, -6px -6px 6px rgba(174,170,192,0.25) inset",
    minWidth: 150,
    height: 150,
    margin: theme.spacing(1),
    flexGrow: 0,
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
  },
  imageBox: {
    padding: theme.spacing(0),
    height: "85%",
    width: "85%",
    borderRadius: "50%",
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
                     image={image.image_url}
                     title={image.copyright}
          />

      </Paper>

  )

}