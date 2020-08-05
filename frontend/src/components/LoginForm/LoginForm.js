import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {useContext, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {UserDispatchContext, UserStateContext} from "../../context/user/UserContext";
import {LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from "../../context/user/UserContextProvider";
import {performLogin} from "../../utils/auth-utils";
import {getDecodedJWTToken, setJWTToken} from "../../utils/jwt-utils";
import {Redirect, useLocation} from "react-router";
import InputBox from "../Containers/InputBox/InputBox";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: "transparent",
    boxShadow: "-10px -10px 25px #fff, 10px 10px 25px rgba(174,170,192,0.4)",
    width: 300,
    '@media (max-width: 375px)': {
      width: 250,
    },
    '@media (max-width: 320px)': {
      width: 220,
    },
    maxHeight: 220,
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    flexGrow: 1,
    borderRadius: 45,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
  },
  loginButton: {
    margin: theme.spacing(1),
    width: "50%",
    backgroundColor: theme.palette.primary.main,
    boxShadow: '-5px -5px 5px rgba(255,255,255, 1), 5px 5px 5px rgba(163,172,161, 0.4)',
    borderRadius: 10,
    fontWeight: "normal",
    alignSelf: "center",
  },
  textField: {
    alignSelf: "center",
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
        <InputBox>
          <TextField
              className={classes.textField}
              label="Username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
          />
        </InputBox>
        <InputBox>
          <TextField
              className={classes.textField}
              label="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
          />
        </InputBox>
        <Button onClick={login} className={classes.loginButton}>Login</Button>
      </Paper>
  );
}