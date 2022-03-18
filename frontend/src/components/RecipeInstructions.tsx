/* eslint-disable react/no-array-index-key */
import React from "react";
import StyledRecipeInstructions from "../styles/RecipeInstructions.style";

type RecipeInstructionsProps = {
  instructions: string;
};

function RecipeInstructions({ instructions }: RecipeInstructionsProps) {
  if (instructions === "No Instructions Found") {
    return (
      <StyledRecipeInstructions>
        <h3>Instructions</h3>
        <p>{instructions}</p>
      </StyledRecipeInstructions>
    );
  }
  const removedHeader = instructions.replace(/^[Ii]nstruction\S*\s+/, "");
  const instructionsArray = removedHeader.split(/\.(?:\)|(?:\s+\())*/);
  const sanitizedArray = instructionsArray.filter(
    (item: string) => item !== "" && item.match(/^\d+$/) === null
  );
  return (
    <StyledRecipeInstructions>
      <h3>Instructions</h3>
      <ol>
        {sanitizedArray.map((instruction, index) => (
          <li key={`istep${index}`}>{instruction}</li>
        ))}
      </ol>
    </StyledRecipeInstructions>
  );
}

export default RecipeInstructions;
