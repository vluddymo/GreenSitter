import React, {useContext, useEffect} from "react";
import {UserDispatchContext} from "../../context/user/UserContext";
import {getDecodedJWTToken, isJWTTokenValid} from "../../utils/jwt-utils";
import {LOGIN_SUCCESS, LOGIN_FAILED} from "../../context/user/UserContextProvider";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Container from "@material-ui/core/Container";
import PrivateRoute from "../../pages/PrivateRoute";
import AddPlantPage from "../../pages/AddPlantPage";
import PlantsDashboard from "../../pages/PlantsDashboard";
import LoginPage from "../../pages/LoginPage";
import PlantDetails from "../../pages/PlantDetails";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GreenSitterLogo from "../GreenSitterLogo/GreenSitterLogo";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "100%",
    flexGrow: 10,
    padding: theme.spacing(0),
    overflowY: "scroll",
    display: "flex",
    justifyContent: "center",
  }
}));

//"linear-gradient(90deg, rgba(194, 214, 189, 1) 0%, rgba(217, 243, 217, 1) 50%, rgba(255, 255, 255, 1) 100%)"

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
      <BrowserRouter>
        <GreenSitterLogo/>
        <Container maxWidth={'md'} component="main" className={classes.container}>
          <Switch>
            <PrivateRoute
                path="/plant/add"
                component={AddPlantPage}
                exact
            />
            <PrivateRoute
                path="/plant/:nickName"
                component={PlantDetails}
                exact
            />
            <PrivateRoute path="/" exact component={PlantsDashboard}/>
            <Route path="/login" exact>
              <LoginPage/>
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
  );
}