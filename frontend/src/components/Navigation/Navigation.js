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
import GreenSitterLogo from "../GreenSitterLogo/GreenSitterLogo";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#1263a3",
    borderColor: "rgb(83, 96, 52)",
    height: "100%",
    maxWidth: "90%",
    padding: theme.spacing(2),
    overflowY: "scroll",
    marginTop: 15,
    borderRadius: 25,
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
        <GardenAppBar/>
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