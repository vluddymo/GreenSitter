import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import IdCardBadge from "./IdCardBadge/IdCardBadge";
import IdCardContent from "./IdCardContent/IdCardContent";
import IdCardHeader from "./IdCardHeader/IdCardHeader";

const useStyles = makeStyles({
    resultCard: {
        width: "90%",
        '@media (min-width: 426px)': {
            maxWidth: "md",
        },
        alignSelf: "center",
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
    }
});


export default function IdentificationResultCard({results}) {

    const classes = useStyles();

    return (
        <Box className={classes.resultCard}>
            <IdCardBadge image={results.images[0].url}/>
            <IdCardHeader/>
            <IdCardContent suggestions={results.suggestions}/>
        </Box>
    );

}