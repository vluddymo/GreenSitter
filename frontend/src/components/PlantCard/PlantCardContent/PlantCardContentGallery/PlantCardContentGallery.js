import {Box} from "@material-ui/core";
import React, {useContext} from "react";
import LoadingSpinner from "../../../Spinner/LoadingSpinner";
import {PlantStateContext} from "../../../../context/plant/PlantContext";
import GalleryItem from "./GalleryItem";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  galleryBox: {
    background: "transparent",
    height: "min-content",
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "center",
    overflowX: "scroll",
  },
}));

export default function PlantCardContentGallery({images}){

  const classes = useStyles();
  const {fetchStatus} = useContext(PlantStateContext);

  return (

  <Box className={classes.galleryBox}>
        {fetchStatus === 'PENDING' && <LoadingSpinner/>}
        {images.map((image) => (
            <GalleryItem
                image={image}
                key={image.id}/>
        ))}
      </Box>

  )

 }