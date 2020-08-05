import React, {useContext} from "react";
import AppBar from "@material-ui/core/AppBar";
import {UserStateContext} from "../../context/user/UserContext";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LogoutIconButton from "../Buttons/IconButtons/LogoutIconButton";
import HomeIconButton from "../Buttons/IconButtons/HomeIconButton";


const useStyles = makeStyles({
  root: {
    background: "transparent",
    maxHeight: 50,
    minHeight: 30,
    maxWidth: "100%",
    color: "#fff",
    display: "flex",
    zIndex: 0,
    border: "none",
    boxShadow: "none",
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  toolbar: {
    alignSelf: "center",
    width: "90%",
    height: 50,
    margin: "auto",
  }
});

function GreenSitterAppBar() {

  const classes = useStyles();
  const {authStatus} = useContext(UserStateContext);

  return (
      <AppBar position={"static"} className={classes.root}>
        {authStatus === 'SUCCESS' && (
            <>
              <HomeIconButton/>
              <LogoutIconButton/>
            </>
        )}
      </AppBar>
  );
}

export default GreenSitterAppBar;
