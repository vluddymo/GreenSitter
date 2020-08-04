import {removeJWTToken} from "../../utils/jwt-utils";
import React, {useContext} from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import {UserDispatchContext, UserStateContext} from "../../context/user/UserContext";
import {LOGOUT} from "../../context/user/UserContextProvider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from "@material-ui/core/IconButton";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';


const useStyles = makeStyles((theme) => ({
  root: {
    background: "transparent",
    maxHeight: 50,
    margin: theme.spacing(1),
    maxWidth: "90%",
    color: "#fff",
    zIndex: 0,
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    border: "none",
    boxShadow: "none",
  },
  toolbar: {
    width: "90%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    justifyContent: "space-between",
    alignContent: "center"
  }
}));

function GreenSitterAppBar() {

  const classes = useStyles();
  const {authStatus /*, userData*/} = useContext(UserStateContext);
  const dispatch = useContext(UserDispatchContext);

  return (
      <AppBar position={"static"} className={classes.root}>
        {authStatus === 'SUCCESS' && (
            <Toolbar className={classes.toolbar}>
              <IconButton color="inherit">
                <HomeRoundedIcon/>
              </IconButton>
              <IconButton
                  color="inherit"
                  onClick={() => {
                    dispatch({type: LOGOUT});
                    removeJWTToken();
                  }}
              >
                <ExitToAppIcon/>
              </IconButton>
            </Toolbar>
        )}
      </AppBar>
  );
}

export default GreenSitterAppBar;
