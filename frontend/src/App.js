import React from 'react';
import './App.css';
import UserContextProvider from "./context/user/UserContextProvider";
import PlantContextProvider from "./context/plant/PlantContextProvider";
import {ThemeProvider} from '@material-ui/styles';
import GreenSitterTheme from "./theme/GreenSitterTheme";
import ApiSearchContextProvider from "./context/apiSearch/ApiSearchContextProvider";
import ContentFrame from "./components/ContentFrame/ContentFrame";


function App() {

  return (

      <UserContextProvider>
        <PlantContextProvider>
          <ApiSearchContextProvider>
            <ThemeProvider theme={GreenSitterTheme}>
              <ContentFrame/>
            </ThemeProvider>
          </ApiSearchContextProvider>
        </PlantContextProvider>
      </UserContextProvider>

  )

}

export default App;
