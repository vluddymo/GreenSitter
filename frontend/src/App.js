import React from 'react';
import './App.css';
import UserContextProvider from "./context/user/UserContextProvider";
import PlantContextProvider from "./context/plant/PlantContextProvider";
import {ThemeProvider} from '@material-ui/styles';
import GreenSitterTheme from "./theme/GreenSitterTheme";
import Navigation from "./components/Navigation/Navigation";



function App() {
  return (
      <ThemeProvider theme={GreenSitterTheme}>
        <UserContextProvider>
          <PlantContextProvider>
            <Navigation/>
          </PlantContextProvider>
        </UserContextProvider>
      </ThemeProvider>
  )

}

export default App;
