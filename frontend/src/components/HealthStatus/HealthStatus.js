import React from "react";

export default function HealthStatus({percentage}) {

  return (

      <svg width={"100%"} height={"100%"}>
          <rect width={"100%"} height={"100%"} fill={"blue"} />
          <rect width={"100%"} height={100-percentage+"%"} fill={"lightblue"} />
      </svg>

  )

}