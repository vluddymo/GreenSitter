import SuggestionEntry from "./SuggestionEntry/SuggestionEntry";

export default function IdCardContent({suggestions}){

    return (
        suggestions.map((suggestion) => (
            <SuggestionEntry
                key={suggestion.id}
                suggestion={suggestion}/>
        ))
    )
}