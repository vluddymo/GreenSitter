import React from "react";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  status: {
    maxWidth: "100%",
    maxHeight: "50%",
    margin: 0,
  }
})


export default function WateringStatus({wateringStatus}) {

  const classes = useStyles();
  return (
      <Box className={classes.status}>
        <svg width="185" height="42" viewBox="0 0 200 30" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          <rect id="scale" x="-3" y="5" width="100%" height="40%" rx="3%" fill={"#8dcbec"}/>
          <rect id="value" x="-3" y="5" width={wateringStatus+"%"} height="40%" rx="3%" fill={"#025ef8"}/>
        </svg>
      </Box>

  )
}