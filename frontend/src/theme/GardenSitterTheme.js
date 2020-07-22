import {createMuiTheme} from "@material-ui/core/styles";

const GardenSitterTheme = createMuiTheme({
  palette: {
    primary:
        {
          main: '#219250' // turquoise
        },
    secondary:
        {
          main: '#19c4bf' // light turquoise
        },
    error:
        {
          main: '#dfa528' // sandy yellow
        },
    info:
        {
          main: '#ffffff' // white
        },
  },

  typography: {
    h4: {
      fontFamily: "Roboto",
    },
    h5: {
      fontFamily: 'Pacifico',
      fontWeight: "bold",
      fontSize: "medium",
    },
    h6: {
      fontFamily: "Arimo",
      color: "rgba(25,127,36,0.65)",
      fontWeight: "bold",
      fontSize: "medium"
    },
    body2: {
      fontFamily: 'Arimo',
      color: '#4e574e',
    }
  },

});

export default GardenSitterTheme;