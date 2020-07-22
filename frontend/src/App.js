import React from 'react';
import './App.css';
import UserContextProvider from "./context/user/UserContextProvider";
import PlantContextProvider from "./context/plant/PlantContextProvider";
import {ThemeProvider} from '@material-ui/styles';
import GardenSitterTheme from "./theme/GardenSitterTheme";
import Navigation from "./components/Navigation/Navigation";



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
