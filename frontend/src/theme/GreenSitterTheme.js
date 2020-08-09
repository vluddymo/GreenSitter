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
    h3: {
      fontFamily: "Arial",
      fontSize: "1.2rem",
      fontWeight: "normal",
      textTransform: "uppercase",
      letterSpacing: "0.090em"
    },
    h4: {
      fontFamily: "Roboto",
      fontSize: "large",
      color: "#006B5F",    },
    h5: {
      fontFamily: 'Arial',
      fontSize: "0.8rem",
      color: "#006B5F",
      textTransform: "uppercase",
      fontWeight: "normal",
    },
    h6: {
      fontFamily: "Arimo",
      color: 'rgba(66,85,66,0.75)',
      fontWeight: "normal",
      fontSize: "small"
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