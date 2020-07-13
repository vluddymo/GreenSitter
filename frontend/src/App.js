import React, {useContext, useEffect} from 'react';
import './App.css';
import {UserDispatchContext} from "./context/user/UserContext";
import UserContextProvider, {LOGIN_SUCCESS} from "./context/user/UserContextProvider";
import {getDecodedJWTToken, isJWTTokenValid} from "./utils/jwt-utils";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import PrivateRoute from "./pages/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import GardenAppBar from "./components/GardenAppBar";
import HelloWorldPage from "./pages/HelloWorldPage";

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
            <PrivateRoute path="/" exact component={HelloWorldPage}>

            </PrivateRoute>
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
      <UserContextProvider>
          <Navigation/>
      </UserContextProvider>
  )

}

export default App;
