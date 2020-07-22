import {removeJWTToken} from "../../utils/jwt-utils";
import Button from "@material-ui/core/Button";
import React, {useContext} from "react";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import {UserDispatchContext, UserStateContext} from "../../context/user/UserContext";
import {LOGOUT} from "../../context/user/UserContextProvider";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "FF219250",
  },
  title: {
    flexGrow: 1,
  },

}));

function GardenAppBar() {
  const classes = useStyles();
  const {authStatus /*, userData*/} = useContext(UserStateContext);
  const dispatch = useContext(UserDispatchContext);
  return (
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h4" className={classes.title} align={"center"}>
            GreenSitter
          </Typography>
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

export default GardenAppBar;
