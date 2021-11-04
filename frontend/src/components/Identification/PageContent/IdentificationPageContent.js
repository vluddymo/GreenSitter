import SuggestionEntry from "./SuggestionEntry/SuggestionEntry";
import React from "react";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    resultContent: {
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

export default function IdentificationPageContent({suggestions},) {

    const classes = useStyles();

    return (
        <Box className={classes.resultContent}>
            {suggestions.map((suggestion) => (
            <SuggestionEntry
                key={suggestion.id}
                suggestion={suggestion}
            />
        ))}
        </Box>
    )
}