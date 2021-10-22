import IconButton from "@material-ui/core/IconButton";
import React from "react";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    detailsButton: {
        marginRight: theme.spacing(0.5),
        color: "#006B5F",
    },
    detailsBox: {
        display: "flex",
        flexDirection: "row",
    },
}));


export default function ResultDetailsButton() {

    const classes = useStyles();

    return (

        <IconButton className={classes.detailsBox}>
            <InfoOutlinedIcon fontSize={"small"} className={classes.detailsButton}/>
            <Typography variant="subtitle2" component="div">Details</Typography>
        </IconButton>

    )

}