import {useContext} from "react";
import {ApiSearchStateContext} from "../context/apiSearch/ApiSearchContext";
import PageContent from "../components/PageComponents/PageContent/PageContent";
import IdentificationResultCard from "../components/IdentificationResultCard/IdentificationResultCard";

export default function IdentificationResults() {

    const {results} = useContext(ApiSearchStateContext);

    return (
        <PageContent>
            {results && <IdentificationResultCard results={results}/>}
        </PageContent>
    )
}