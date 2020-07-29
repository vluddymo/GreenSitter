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
import PlantDetails from "../../pages/PlantDetails";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "linear-gradient(180deg, rgba(234, 247, 234, 1) 0%, rgba(217, 243, 217, 1) 20%, rgba(162, 214, 194, 1) 100%)",
    // "linear-gradient(0deg, rgba(186,235,188,1) 0%, rgba(149,208,197,1) 90%, rgba(0,159,149,1) 100%)",
    height: "100vh",
    maxWidth: "95%",
    padding: theme.spacing(2),
    overflowY: "scroll",
    display: "flex" ,
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 25,
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
      <BrowserRouter>
        <GardenAppBar/>
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