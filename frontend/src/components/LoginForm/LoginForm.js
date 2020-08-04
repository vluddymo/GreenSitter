import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {useContext, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {UserDispatchContext, UserStateContext} from "../../context/user/UserContext";
import {LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from "../../context/user/UserContextProvider";
import {performLogin} from "../../utils/auth-utils";
import {getDecodedJWTToken, setJWTToken} from "../../utils/jwt-utils";
import {Redirect, useLocation} from "react-router";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: "transparent",
    boxShadow: "-10px -10px 36px #fff, 10px 10px 36px rgba(174,170,192,0.4)",
    maxWidth: 300,
    maxHeight: 200,
    padding: theme.spacing(2.5),
    marginTop: theme.spacing(2),
    margin: "auto",
    flexGrow: 1,
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  textBox: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    height: 50,
    width: 250,
    borderRadius: 10,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    boxShadow: '-5px -5px 5px rgba(255,255,255,0.7) inset, 5px 5px 5px rgba(174,170,192,0.2) inset',
  },
  loginButton: {
    width: "50%",
    backgroundColor: "rgb(170,200,165)",
    boxShadow: '-5px -5px 5px rgba(255,255,255, 1), 5px 5px 5px rgba(163,172,161, 0.4)',
    margin: "auto",
    borderRadius: 10,
    fontWeight: "normal",
  }
}));

export default function LoginForm() {

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
        <Box className={classes.textBox}>
          <TextField
              className={classes.textField}
              label="Username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
          />
        </Box>
        <Box className={classes.textBox}>
          <TextField
              className={classes.textField}
              label="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
          />
        </Box>
        <Button onClick={login} className={classes.loginButton}>Login</Button>
      </Paper>
  );
}