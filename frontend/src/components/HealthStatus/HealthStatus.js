import React from "react";

export default function HealthStatus({percentage}) {

  return (

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
        <g>
          <rect width="100" height="100" x={"20"} y={"40"} fill={"black"} />
          <rect width="100" height={percentage} x={"20"} y={"40"} fill={"blue"} />
        </g>
      </svg>

  )

}