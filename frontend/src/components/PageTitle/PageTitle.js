import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "transparent",
    alignSelf: "center",
    width: "80%",
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(1),
    borderRadius: 30,
    boxShadow: "-8px -8px 8px #fff inset, 8px 8px 8px rgba(174,170,192,0.4) inset",
  },
  pageTitle: {
    borderRadius: 27.5,
    width: "100%",
    height: "min-content",
    margin: 8,
    backgroundColor: "rgb(170,200,165)",
    textAlign: "center",
  },
  title: {
    marginTop: theme.spacing(1.5),
    height: 30,

  }
}));

export default function PageTitle({title}) {

  const classes = useStyles();

  return (

      <Box className={classes.container}>
        <Box className={classes.pageTitle}>
          <Typography variant={"h3"} className={classes.title}>
            {title}
          </Typography>
        </Box>
      </Box>

  )
};