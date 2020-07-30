import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {useContext, useState} from "react";
import {performLogin} from "../utils/auth-utils";
import {getDecodedJWTToken, setJWTToken} from "../utils/jwt-utils";
import {LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from "../context/user/UserContextProvider";
import {UserDispatchContext, UserStateContext} from "../context/user/UserContext";
import {Redirect, useLocation} from "react-router";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles({
  gridContainer: {
    justifyContent: "center",
  },
  paper: {
    maxWidth: 300,
    maxHeight: 300,
    margin: 25,
    borderRadius: 15,
    flexGrow: 10,
    flexDirection: "column",
    alignContent: "center",
    borderStyle: "solid",
    border: "thin",
    justifyContent: "center",
  },
  loginForm: {
    justifyContent: "center",
    margin: 10
  }
});

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useContext(UserDispatchContext);
  const classes = useStyles();

  function login() {
    dispatch({type: LOGIN});
    performLogin(username, password)
        .then((data) => {
          setJWTToken(data);
          const userData = getDecodedJWTToken();
          dispatch({type: LOGIN_SUCCESS, payload: userData});
        })
        .catch(() => {
          dispatch({type: LOGIN_FAILED});
        });
  }

  const {authStatus} = useContext(UserStateContext);
  const location = useLocation();
  if (authStatus === 'SUCCESS') {
    const locationState = location.state || {from: {pathname: "/"}};
    return <Redirect to={locationState.from.pathname}/>
  }


  return (
      <Paper className={classes.paper}>
        <Grid className={classes.gridContainer} container>
          <Grid item className={classes.loginForm}>
            <div>
              <TextField
                  label="Username"
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div>
              <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <Button onClick={login}>Login</Button>
          </Grid>
        </Grid>
      </Paper>
  );
}

export default LoginPage;
