import React, {useContext} from "react";
import {ApiSearchStateContext} from "../context/apiSearch/ApiSearchContext";
import PageContent from "../components/PageComponents/PageContent/PageContent";
import IdentificationResultCard from "../components/IdentificationResultCard/IdentificationResultCard";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import Typography from "@material-ui/core/Typography";

export default function IdentificationResults() {

    const {results, fetchResultsStatus} = useContext(ApiSearchStateContext);

    return (
        <PageContent>
            {results && <IdentificationResultCard results={results}/>}
            {fetchResultsStatus === 'PENDING' && <LoadingSpinner/>}
            {fetchResultsStatus === 'FAILED' && (
                <Typography variant="body1" color="error" component="p">
                    Fetch Results failed
                </Typography>
            )}
        </PageContent>
    )
}