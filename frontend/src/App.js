import React, {useContext, useEffect} from 'react';
import './App.css';
import {UserDispatchContext} from "./context/user/UserContext";
import UserContextProvider, {LOGIN_SUCCESS} from "./context/user/UserContextProvider";
import {getDecodedJWTToken, isJWTTokenValid} from "./utils/jwt-utils";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import PrivateRoute from "./pages/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import GardenAppBar from "./components/GardenAppBar/GardenAppBar";
import PlantsDashboard from "./pages/PlantsDashboard";
import PlantContextProvider from "./context/plant/PlantContextProvider";
import AddPlantPage from "./pages/AddPlantPage";
import {ThemeProvider} from '@material-ui/styles';
import GardenSitterTheme from "./theme/GardenSitterTheme";

function Navigation() {
  const dispatch = useContext(UserDispatchContext);

  useEffect(() => {
    if (isJWTTokenValid()) {
      dispatch({type: LOGIN_SUCCESS, payload: getDecodedJWTToken()});
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


function App() {
  return (
      <ThemeProvider theme={GardenSitterTheme}>
        <UserContextProvider>
          <PlantContextProvider>
            <Navigation/>
          </PlantContextProvider>
        </UserContextProvider>
      </ThemeProvider>
  )

}

export default App;
