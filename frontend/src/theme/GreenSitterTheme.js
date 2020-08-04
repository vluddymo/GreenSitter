import {createMuiTheme} from "@material-ui/core/styles";

const GreenSitterTheme = createMuiTheme({
  palette: {
    primary:
        {
          main: 'rgb(170,200,165)' // green
        },
    secondary:
        {
          main: '#19c4bf' // light turquoise
        },
    error:
        {
          main: '#bf4f32' // orange-red
        },
    textPrimary:
        {
          main: '#c9dfde' // slightly blue white
        },
  },

  typography: {
    h3: {
      fontFamily: "Arial",
      color: "rgba(0, 0, 0, 0.87)",
      fontSize: "1rem",
      fontWeight: "normal",
      textTransform: "uppercase",
      letterSpacing: "0.050em"
    },
    h4: {
      fontFamily: "Roboto",
      color: "white",
      fontSize: "large",
    },
    h5: {
      fontFamily: 'Pacifico',
      color: "#006B5F",
      fontWeight: "bold",
      fontSize: "large",
    },
    h6: {
      fontFamily: "Arimo",
      color: "rgb(151,198,144)",
      fontWeight: "bold",
      fontSize: "medium"
    },
    body2: {
      fontFamily: 'Arimo',
      color: '#555855',
    }
  },

});

export default GreenSitterTheme;