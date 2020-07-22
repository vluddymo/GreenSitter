import React, {useContext, useEffect} from "react";
import {UserDispatchContext} from "../../context/user/UserContext";
import {getDecodedJWTToken, isJWTTokenValid} from "../../utils/jwt-utils";
import {LOGIN_SUCCESS, LOGIN_FAILED} from "../../context/user/UserContextProvider";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import GardenAppBar from "../GardenAppBar/GardenAppBar";
import Container from "@material-ui/core/Container";
import PrivateRoute from "../../pages/PrivateRoute";
import AddPlantPage from "../../pages/AddPlantPage";
import PlantsDashboard from "../../pages/PlantsDashboard";
import LoginPage from "../../pages/LoginPage";

export default function Navigation() {
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
        <GardenAppBar/>
        <Container maxWidth={'md'} component="main">
          <Switch>
            <PrivateRoute
                path="/plant/add"
                component={AddPlantPage}
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