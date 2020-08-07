import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  badge: {
    background: "#f0f0f3",
    boxShadow: "-10px -10px 24px #fff, 10px 10px 24px rgba(174,170,192,0.4), 10px 10px 10px #fff inset, -10px -10px 10px rgba(174,170,192,0.25) inset",
    minWidth: 100,
    height: 100,
    margin: theme.spacing(3),
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
    margin: "auto",
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