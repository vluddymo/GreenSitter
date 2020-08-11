import {Box} from "@material-ui/core";
import React from "react";
import GalleryItem from "./GalleryItem";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  galleryBox: {
    background: "transparent",
    width: "100%",
    height: "100%",
    margin: theme.spacing(0),
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "center",
    overflowX: "scroll",
  },
}));

export default function PlantCardContentGallery({images}) {

  const classes = useStyles();

  return (

      <Box className={classes.galleryBox}>
        {images.map((image) => (image != null && <GalleryItem image={image} key={image.id}/>
          ))}
      </Box>

  )

}