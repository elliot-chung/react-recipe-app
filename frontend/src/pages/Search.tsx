import React from "react";
import RecipeCard from "../components/RecipeCard";
import useSearch from "../controllers/SearchController";

interface SearchResult {
  id: number;
  image: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  title: string;
}

let baseImageUri = "https://spoonacular.com/recipeImages/";

function Search(): JSX.Element {
  const { query, data, error, isError, isLoading, isSuccess } = useSearch();
  if (isSuccess) baseImageUri = data?.data.baseUri || baseImageUri;
  return (
    <main>
      <h1>Showing results for: {query}</h1>
      {isError && <div>Error: {error}</div>}
      {isLoading && <div>Loading...</div>}
      {isSuccess &&
        data?.data.results.map((item: SearchResult) => (
          <RecipeCard
            key={item.id}
            id={item.id}
            image={baseImageUri + item.image}
            readyInMinutes={item.readyInMinutes}
            servings={item.servings}
            sourceUrl={item.sourceUrl}
            title={item.title}
          />
        ))}
    </main>
  );
}

export default Search;
