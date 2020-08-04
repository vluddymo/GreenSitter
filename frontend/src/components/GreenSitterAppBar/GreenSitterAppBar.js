import React, {useContext} from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import {UserStateContext} from "../../context/user/UserContext";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LogoutIconButton from "../Buttons/IconButtons/LogoutIconButton";
import HomeIconButton from "../Buttons/IconButtons/HomeIconButton";


const useStyles = makeStyles({
  root: {
    background: "transparent",
    maxHeight: 50,
    maxWidth: "100%",
    color: "#fff",
    display: "flex",
    zIndex: 0,
    border: "none",
    boxShadow: "none",
    alignSelf: "center"
  },
  toolbar: {
    alignSelf: "center",
    width: "90%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    justifyContent: "space-between",
  }
});

function GreenSitterAppBar() {

  const classes = useStyles();
  const {authStatus} = useContext(UserStateContext);

  return (
      <AppBar position={"static"} className={classes.root}>
        {authStatus === 'SUCCESS' && (
            <Toolbar className={classes.toolbar}>
              <HomeIconButton/>
              <LogoutIconButton/>
            </Toolbar>
        )}
      </AppBar>
  );
}

export default GreenSitterAppBar;
