import Box from "@material-ui/core/Box";
import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  inputBox: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    padding: theme.spacing(1.5),
    margin: theme.spacing(1),
    width: "max-content",
    borderRadius: 10,
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    boxShadow: '-5px -5px 5px rgba(255,255,255,0.7) inset, 5px 5px 5px rgba(174,170,192,0.2) inset',
  },
}));

export default function InputBox({children}) {

  const classes = useStyles();

  return <Box className={classes.inputBox}>{children}</Box>

}