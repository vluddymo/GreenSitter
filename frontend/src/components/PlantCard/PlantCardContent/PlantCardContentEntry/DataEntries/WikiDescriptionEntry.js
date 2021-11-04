import Typography from "@material-ui/core/Typography";
import React from "react";

export default function WikiDescriptionEntry({description}) {

    return (

        description != null &&
        <>
            <Typography variant={"overline"} component={"p"}>Beschreibung</Typography>
            <Typography variant="body1" component="p" gutterBottom={true}>
                {description}
            </Typography>
        </>

    )

}