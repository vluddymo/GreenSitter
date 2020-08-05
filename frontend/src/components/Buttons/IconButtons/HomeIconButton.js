import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import {useHistory} from "react-router";

export default function () {

      const history = useHistory();

  return (

      <IconButton color="primary" onClick={() => history.push("/")}>
        <HomeRoundedIcon/>
      </IconButton>
  )

}