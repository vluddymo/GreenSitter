import React, {useEffect, useState} from "react";

import {fetchSearchQuery} from "../utils/api-Utils";


export default function AddPlantPage() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length > 3){
     fetchSearchQuery(query).then(response => setResults(response))
    }
  }, [query]);

  function handleOnInputChange(event) {
    setQuery(event.target.value);
  }


  return (
      <>
        <input id="search-input"
               value={query}
               type={"text"}
               onChange={handleOnInputChange}/>
            {results.map(result => (
            <div key={result.id}>
              <img src={result.imgUrl} alt="blah" width={"50px"}/>
              <div>{result.name}</div>
            </div>
            )

        )}
      </>

  )

}

