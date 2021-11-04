import React, {useContext} from "react";
import {ApiSearchStateContext} from "../context/apiSearch/ApiSearchContext";
import PageContent from "../components/PageComponents/PageContent/PageContent";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import Typography from "@material-ui/core/Typography";
import IdentificationPageHeader from "../components/Identification/PageHeader/IdentificationPageHeader";
import IdentificationPageContent from "../components/Identification/PageContent/IdentificationPageContent";

export default function IdentificationResults() {

    const {results, fetchResultsStatus} = useContext(ApiSearchStateContext);

    return (
        <PageContent>
            <IdentificationPageHeader image={results.images[0].url}/>
            <IdentificationPageContent suggestions={results.suggestions}/>
            {fetchResultsStatus === 'PENDING' && <LoadingSpinner/>}
            {fetchResultsStatus === 'FAILED' && (
                <Typography variant="body1" color="error" component="p">
                    Fetch Results failed
                </Typography>
            )}
        </PageContent>
    )
}