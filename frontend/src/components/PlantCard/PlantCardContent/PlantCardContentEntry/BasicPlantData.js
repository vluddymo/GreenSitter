import CommonNamesEntry from "./DataEntries/CommonNamesEntry";
import React from "react";
import WikiDescriptionEntry from "./DataEntries/WikiDescriptionEntry";
import WikiLinkEntry from "./DataEntries/WikiLinkEntry";


export default function BasicPlantData({plant}) {

    function fuseCommonNames() {
        const commonNames = plant.commonNames;
        return commonNames.join(" | ");
    }

    return (
        <>
            <CommonNamesEntry commonNames={fuseCommonNames()}/>
            <WikiDescriptionEntry description={plant.wikiData.wikiDescription}/>
            <WikiLinkEntry link={plant.wikiData.wikiLink}/>
        </>
    )
}