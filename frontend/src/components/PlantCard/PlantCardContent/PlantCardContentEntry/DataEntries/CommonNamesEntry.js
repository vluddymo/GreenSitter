import Typography from "@material-ui/core/Typography";
import React from "react";

export default function CommonNamesEntry({commonNames}) {

return (

  commonNames != null &&
          <>
            <Typography variant={"overline"} component={"p"}>Synonyme</Typography>
            <Typography variant="h5" component="p" gutterBottom={true}>
              {commonNames}
            </Typography>
          </>

)

}