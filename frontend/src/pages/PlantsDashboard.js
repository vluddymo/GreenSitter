import React, {useContext, useEffect} from "react";
import PlantPreviewCard from "../components/PlantPreviewCard/PlantPreviewCard";
import {fetchPlants} from "../context/plant/plantActions";
import {PlantDispatchContext, PlantStateContext} from "../context/plant/PlantContext";
import Typography from "@material-ui/core/Typography";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import PageContent from "../components/PageComponents/PageContent/PageContent";
import AddingButton from "../components/Buttons/FabButtons/AddingButton";
import ButtonBox from "../components/Buttons/FabButtons/ButtonBox/ButtonBox";
import PageTitle from "../components/PageComponents/PageTitle/PageTitle";
import {ApiSearchStateContext} from "../context/apiSearch/ApiSearchContext";
import LoadingDialogue from "../components/Dialogues/LoadingDialogue/LoadingDialogue";


export default function PlantsDashboard() {

    const {plants, fetchStatus} = useContext(PlantStateContext);
    const {fetchResultsStatus} = useContext(ApiSearchStateContext);
    const dispatch = useContext(PlantDispatchContext);

    useEffect(() => {
        fetchPlants(dispatch);
    }, [dispatch]);


    return (
        <PageContent>
            <PageTitle title={"My Shelve"}/>
            {plants.map((plant) => (
                <PlantPreviewCard
                    key={plant.nickName}
                    plant={plant}
                />
            ))}
            {fetchResultsStatus === 'PENDING' && <LoadingDialogue/>}
            {fetchStatus === 'PENDING' && <LoadingSpinner/>}
            {fetchStatus === 'FAILED' && (
                <Typography variant="body1" color="error" component="p">
                    Fetch Plants failed
                </Typography>
            )}
            <ButtonBox>
                <AddingButton/>
            </ButtonBox>
        </PageContent>
    )
}
