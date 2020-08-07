import Typography from "@material-ui/core/Typography";
import React from "react";

export default function PlantCardContentEntry({plantAttribute, title}) {

return (

  plantAttribute != null &&
          <>
            <Typography variant={"overline"} component={"p"}>{title}</Typography>
            <Typography variant="h5" component="p" gutterBottom={true}>
              {plantAttribute}
            </Typography>
          </>

)

}