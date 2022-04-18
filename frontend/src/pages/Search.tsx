import { AxiosError } from "axios";
import React from "react";
import RecipeCard from "../components/RecipeCard";
import SearchPageButtons from "../components/SearchPageButtons";
import useSearch from "../controllers/SearchController";
import StyledRecipeCardContainer from "../styles/RecipeCardContainer.style";
import StyledSearchPage from "../styles/Search.style";

interface SearchResult {
  id: number;
  image: string;
  readyInMinutes: number;
  servings: number;
  title: string;
}

const loadingCard = (
  <RecipeCard
    id={0}
    image=""
    readyInMinutes={0}
    servings={0}
    title="Loading..."
  />
);

function Search(): JSX.Element {
  const { query, data, error, isError, isLoading, isSuccess } = useSearch();
  const baseImageUri = isSuccess
    ? data?.data.baseUri
    : "https://spoonacular.com/recipeImages/";
  return (
    <StyledSearchPage>
      <h1>Showing results for: {query}</h1>
      {isError && <p>Error: {(error as AxiosError).message}</p>}
      <StyledRecipeCardContainer>
        {isSuccess &&
          data?.data.results.map((item: SearchResult) => (
            <RecipeCard
              key={item.id}
              id={item.id}
              image={baseImageUri + item.image}
              readyInMinutes={item.readyInMinutes}
              servings={item.servings}
              title={item.title}
            />
          ))}
        {isLoading && [...Array(12)].map(() => loadingCard)}
      </StyledRecipeCardContainer>
      <SearchPageButtons totalResults={data?.data.totalResults} />
    </StyledSearchPage>
  );
}

export default Search;
