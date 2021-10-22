import React from "react";
import Grid from "@material-ui/core/Grid";
import PageContent from "../components/PageComponents/PageContent/PageContent";
import UploadBox from "../components/UploadBox/UploadBox";

export default function AddPlantPage() {



    return (
        <PageContent>
            <Grid container justify={"center"}>
                <UploadBox/>
            </Grid>
        </PageContent>

    )

}

