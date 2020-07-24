import React from 'react';
import './App.css';
import UserContextProvider from "./context/user/UserContextProvider";
import PlantContextProvider from "./context/plant/PlantContextProvider";
import {ThemeProvider} from '@material-ui/styles';
import GreenSitterTheme from "./theme/GreenSitterTheme";
import Navigation from "./components/Navigation/Navigation";
import ApiSearchContextProvider from "./context/apiSearch/ApiSearchContextProvider";


function App() {
  return (
      <ThemeProvider theme={GreenSitterTheme}>
        <UserContextProvider>
          <PlantContextProvider>
            <ApiSearchContextProvider>
              <Navigation/>
            </ApiSearchContextProvider>
          </PlantContextProvider>
        </UserContextProvider>
      </ThemeProvider>
  )

}

export default App;
