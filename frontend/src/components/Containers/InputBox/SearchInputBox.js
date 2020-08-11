import {makeStyles} from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import React from "react";

const useStyles = makeStyles((theme) => ({
  inputBox: {
    background: "transparent",
    padding: theme.spacing(1.5),
    margin: theme.spacing(2),
    marginTop: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    width: "85%",
    maxWidth: "sm",
    borderRadius: 50,
    display: "flex",
    alignSelf: "center",
    justifyContent: "space-between",
    boxShadow: '-7px -7px 7px rgba(255,255,255,0.7) inset, 7px 7px 7px rgba(174,170,192,0.2) inset',
  },
}));

export default function SearchInputBox({children}) {

  const classes = useStyles();

  return <Box className={classes.inputBox}>{children}</Box>

}