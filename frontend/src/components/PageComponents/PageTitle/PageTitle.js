import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "transparent",
    alignSelf: "center",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(1),
    borderRadius: 30,
    boxShadow: "-8px -8px 16px #fff, 8px 8px 16px rgba(174,170,192,0.4)",

  },
  pageTitle: {
    width: "100%",
    height: 32,
    margin: 4,
    textAlign: "center",
  },
  title: {
    alignSelf: "center",
    marginTop: theme.spacing(1),
  }
}));

export default function PageTitle({title}) {

  const classes = useStyles();

  return (

      <Box className={classes.container}>
        <Box className={classes.pageTitle}>
          <Typography variant={"h2"} className={classes.title} color={"white"}>
            {title}
          </Typography>
        </Box>
      </Box>

  )
};