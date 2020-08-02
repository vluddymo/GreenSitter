import {removeJWTToken} from "../../utils/jwt-utils";
import Button from "@material-ui/core/Button";
import React, {useContext} from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import {UserDispatchContext, UserStateContext} from "../../context/user/UserContext";
import {LOGOUT} from "../../context/user/UserContextProvider";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#3ca45c",
    maxHeight: 50,
    top: 'auto',
    bottom: 0,
  },
}));

function GreenSitterAppBar() {

  const classes = useStyles();
  const {authStatus /*, userData*/} = useContext(UserStateContext);
  const dispatch = useContext(UserDispatchContext);

  return (
      <AppBar position={"fixed"} className={classes.root}>
        <Toolbar>
          {authStatus === 'SUCCESS' && (
              <Button
                  color="inherit"
                  onClick={() => {
                    dispatch({type: LOGOUT});
                    removeJWTToken();
                  }}
              >
                Logout
              </Button>
          )}
        </Toolbar>
      </AppBar>
  );
}

export default GreenSitterAppBar;
