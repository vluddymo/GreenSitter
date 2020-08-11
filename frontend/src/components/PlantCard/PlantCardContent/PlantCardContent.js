import CardContent from "@material-ui/core/CardContent";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import PlantCardContentGallery from "./PlantCardContentGallery/PlantCardContentGallery";
import BasicPlantData from "./PlantCardContentEntry/BasicPlantData";
import {Box} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  detailsContent: {
    display: 'flex',
    width: "90%",
    height: 205,
    alignItems: "flex-start",
    boxShadow: "-8px -8px 8px #fff inset, 8px 8px 8px rgba(174,170,192,0.4) inset",
    borderRadius: 15,
    flexDirection: "column",
    overflowY: "scroll",
    alignSelf: "center",
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1.5),
  },
  options: {
    alignSelf: "center",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  button: {
    margin: theme.spacing(1),
    width: "35%",
    backgroundColor: theme.palette.primary.main,
    boxShadow: '-5px -5px 5px rgba(255,255,255, 1), 5px 5px 5px rgba(163,172,161, 0.4)',
    borderRadius: 10,
    fontWeight: "normal",
    alignSelf: "center",
  },
}));


export default function PlantCardContent({plant}) {

  const [showData, setShowData] = useState("basic");
  const classes = useStyles();

  return (

      <>
        <CardContent className={classes.detailsContent}>
          {showData === "basic" &&
          <BasicPlantData plant={plant}/>
          }
          {showData === "gallery" && plant.images.flower != null &&
          <PlantCardContentGallery images={plant.images.flower}/>
          }
        </CardContent>
        <Box className={classes.options}>
          <Button onClick={() => setShowData("basic")} className={classes.button}>
            Basic Data
          </Button>
          <Button onClick={() => setShowData("gallery")} className={classes.button}>
            Gallery
          </Button>
        </Box>
      </>

  )

}