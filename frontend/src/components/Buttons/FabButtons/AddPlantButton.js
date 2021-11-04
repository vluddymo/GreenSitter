import Fab from "@material-ui/core/Fab";
import React, {useContext, useEffect} from "react";
import AddIcon from "@material-ui/icons/Add";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {addPlant} from "../../../context/plant/plantActions";
import {PlantDispatchContext, PlantStateContext} from "../../../context/plant/PlantContext";
import {useHistory} from "react-router-dom";
import LoadingDialogue from "../../Dialogues/LoadingDialogue/LoadingDialogue";
import {ApiSearchStateContext} from "../../../context/apiSearch/ApiSearchContext";


const useStyles = makeStyles((theme) => ({
  searchButton: {
    alignSelf: "center",
    borderRadius: "50%",
    padding: theme.spacing(1.3),
    boxShadow: "-5px -5px 15px #fff, 5px 5px 15px rgba(174,170,192,0.4), 5px 5px 5px #fff inset, -5px -5px 5px rgba(174,170,192,0.25) inset",
  },
  fab: {
    boxShadow: "none",
  }
}));

export default function AddPlantButton({suggestion}) {

  const classes = useStyles();
  const history = useHistory();
  const {results} = useContext(ApiSearchStateContext);
  const dispatch = useContext(PlantDispatchContext);
  const {addStatus} = useContext(PlantStateContext);


    useEffect(() => {
        if (addStatus === 'SUCCESS'){
            history.push("/");
        }
    }, [addStatus, history]);

    function buildDataPackage(){
        return {
            plantName: `${suggestion.plant_name}`,
            imageUrl: `${results.images[0].url}`,
            wikiData: {
                wikiLink: `${suggestion.plant_details.url}`,
                wikiDescription: `${suggestion.plant_details.wiki_description.value}`
            },
            commonNames: suggestion.plant_details.common_names,
            images: suggestion.similar_images
        }
    }

    function handleSubmit(){
        addPlant(dispatch,buildDataPackage())
    }

  return (

      <div className={classes.searchButton}>
        <Fab color="primary"
             aria-label="add"
             onClick={handleSubmit}
             size={"small"}
             className={classes.fab}
        >
          <AddIcon/>
        </Fab>
          {addStatus === 'PENDING' && <LoadingDialogue/>}
      </div>

  )
}
