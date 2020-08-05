import {LOGOUT} from "../../../context/user/UserContextProvider";
import {removeJWTToken} from "../../../utils/jwt-utils";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";
import React, {useContext} from "react";
import {UserDispatchContext} from "../../../context/user/UserContext";


export default function LogoutIconButton() {

  const dispatch = useContext(UserDispatchContext);

  return (

      <IconButton
          color="primary"
          onClick={() => {
            dispatch({type: LOGOUT});
            removeJWTToken();
          }}
      >
        <ExitToAppIcon/>
      </IconButton>

  )

}