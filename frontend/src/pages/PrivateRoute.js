import React, {useContext, useEffect} from "react";
import {LOGOUT} from "../context/user/UserContextProvider";
import {Route, Redirect} from "react-router-dom";
import {UserDispatchContext, UserStateContext} from "../context/user/UserContext";
import {removeJWTToken} from "../utils/jwt-utils";

function PrivateRoute({ component: Component, ...rest }) {
  const { authStatus, userData } = useContext(UserStateContext);
  const dispatch = useContext(UserDispatchContext);
  useEffect(() => {
    if (
        authStatus === 'SUCCESS' &&
        new Date().getTime() / 1000 >= userData.exp
    ) {
      removeJWTToken();
      dispatch({ type: LOGOUT });
    }
  });

  return (
      <Route
          {...rest}
          render={(props) => {
            if (authStatus !== 'SUCCESS') {
              return <Redirect to={'/login'} />;
            }

            if (new Date().getTime() / 1000 >= userData.exp) {
              return <Redirect to={'/login'} />;
            }

            return <Component {...props} />;
          }}
      />
  );
}

export default PrivateRoute;
