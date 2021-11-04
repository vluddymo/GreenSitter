import React, {useContext, useEffect} from "react";
import {UserDispatchContext} from "../../context/user/UserContext";
import {getDecodedJWTToken, isJWTTokenValid} from "../../utils/jwt-utils";
import {LOGIN_SUCCESS, LOGIN_FAILED} from "../../context/user/UserContextProvider";
import {Route, Switch} from "react-router-dom";
import Container from "@material-ui/core/Container";
import PrivateRoute from "../../pages/PrivateRoute";
import PlantsDashboard from "../../pages/PlantsDashboard";
import LoginPage from "../../pages/LoginPage";
import PlantDetails from "../../pages/PlantDetails";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IdentificationResults from "../../pages/IdentificationResults";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "transparent",
    maxWidth: 800,
    padding: theme.spacing(0),
    overflow: "scroll",
    flexGrow: 10,
    display: "flex",
    justifyContent: "center"
  }
}));

export default function Navigation() {

  const classes = useStyles();
  const dispatch = useContext(UserDispatchContext);

  useEffect(() => {
    if (isJWTTokenValid()) {
      dispatch({type: LOGIN_SUCCESS, payload: getDecodedJWTToken()});
    } else {
      dispatch({type: LOGIN_FAILED})
    }
  }, [dispatch]);

  return (
          <Container maxWidth={'md'} component="main" className={classes.container}>
            <Switch>
              <PrivateRoute
                  path="/plant/add/identification"
                  component={IdentificationResults}
                  exact
              />
              <PrivateRoute
                  path="/plant/:id"
                  component={PlantDetails}
                  exact
              />
              <PrivateRoute path="/" exact component={PlantsDashboard}/>
              <Route path="/login" exact>
                <LoginPage/>
              </Route>
            </Switch>
          </Container>
  );
}