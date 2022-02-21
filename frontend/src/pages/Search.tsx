import React from "react";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  return (
    <div>
      <h1>Showing results for: {query}</h1>
    </div>
  );
}

export default Search;
