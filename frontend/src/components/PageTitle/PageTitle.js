import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "rgb(170,200,165)",
    width: "100%",
    marginBottom: theme.spacing(2),
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    boxShadow: '-8px -8px 8px #fff, 8px 8px 8px rgb(73, 139, 104, 0.7)',

  },
  pageTitle: {
    maxWidth: "90%",
    backgroundColor: "rgb(73, 139, 104)",
    textAlign: "center",
    flex: '1 0 auto',
    borderRadius: 20,
    paddingBottom: 0,
    alignContent: "center",
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    boxShadow: '-5px -5px 8px #fff, 5px 5px 8px rgb(73, 139, 104, 0.7)',
  },
  title: {
    height: "1%",
  }
}));

export default function PageTitle({title}) {

  const classes = useStyles();

  return (

      <Box className={classes.container}>
        <Box className={classes.pageTitle}>
          <Typography variant={"h3"}>
            {title}
          </Typography>
        </Box>
      </Box>

  )
};