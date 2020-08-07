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

      <ThemeProvider theme={GreenSitterTheme}>
        <UserContextProvider>
          <PlantContextProvider>
            <ApiSearchContextProvider>
              <ContentFrame/>
            </ApiSearchContextProvider>
          </PlantContextProvider>
        </UserContextProvider>
      </ThemeProvider>

  )

}

export default App;
