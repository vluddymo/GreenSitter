import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import HeaderBadge from "./HeaderBadge/HeaderBadge";
import HeaderTitle from "./HeaderTitle/HeaderTitle";

const useStyles = makeStyles({
    identHeader: {
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


export default function IdentificationPageHeader({image}) {

    const classes = useStyles();

    return (
        <Box className={classes.identHeader}>
            <HeaderBadge image={image}/>
            <HeaderTitle/>
        </Box>
    );

}