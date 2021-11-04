import Typography from "@material-ui/core/Typography";
import React from "react";
import {Link} from "@material-ui/core";

export default function WikiLinkEntry({link}) {

    return (

        link != null &&
        <>
            <Typography variant={"overline"} component={"p"}>Wikilink</Typography>
            <Link href={link} underline="hover">
                <Typography variant={"body2"} component={"p"} color={"secondary"}>
                    Hier gehts zum Wikipedia Artikel
                </Typography>
            </Link>
        </>

    )

}