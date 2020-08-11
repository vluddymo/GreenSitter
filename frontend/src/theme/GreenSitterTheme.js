import {createMuiTheme} from "@material-ui/core/styles";

const GreenSitterTheme = createMuiTheme({
  palette: {
    primary:
        {
          main: 'rgb(170,200,165)' // green
        },
    secondary:
        {
          main: "#006B5F" // light turquoise
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
    h2: {
      fontFamily: "Verdana",
      fontSize: "1.2rem",
      fontWeight: "normal",
      letterSpacing: "0.080em",
      color: "rgb(117,123,116)",
    },
    h3: {
      fontFamily: "Arial",
      fontSize: "1.2rem",
      fontWeight: "normal",
      textTransform: "uppercase",
      letterSpacing: "0.080em",
      color: "rgb(117,123,116)",
    },
    h4: {
      fontFamily: "Roboto",
      textTransform: "uppercase",
      color: "#006B5F",
      fontSize: "0.93rem",
    },
    h5: {
      fontFamily: 'Arial',
      fontSize: "0.7rem",
      color: "#006B5F",
      textTransform: "uppercase",
      fontWeight: "normal",
    },
    h6: {
      fontFamily: "Roboto",
      color: 'rgba(66,85,66,0.75)',
      fontWeight: "normal",
      fontSize: "small"
    },
    subtitle2: {
      fontFamily: 'Arial',
      color: '#006B5F',
      fontWeight: "normal",
      fontSize: "0.7rem",
      textTransform: "uppercase",
    },
    body2: {
      fontFamily: 'Arimo',
      color: '#555855',
    },
    overline: {
      color: 'rgba(85,88,85,0.75)',
      fontSize: "0.6rem",
    }
  },

});

export default GreenSitterTheme;