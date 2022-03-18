/* eslint-disable react/no-array-index-key */
import React from "react";

type RecipeInstructionsProps = {
  instructions: string;
};

function RecipeInstructions({ instructions }: RecipeInstructionsProps) {
  const removedHeader = instructions.replace(/[Ii]nstruction\S*\s+/, "");
  const instructionsArray = removedHeader.split(/\.(?:\)|(?:\s+\())*/);
  const sanitizedArray = instructionsArray.filter(
    (item: string) => item !== "" && item.match(/^\d+$/) === null
  );
  return (
    <>
      <h3>Instructions</h3>
      <ol>
        {sanitizedArray.map((instruction, index) => (
          <li key={`istep${index}`}>{instruction}</li>
        ))}
      </ol>
    </>
  );
}

export default RecipeInstructions;
