/* eslint-disable react/no-array-index-key */
import React, { useMemo } from "react";
import StyledRecipeSection from "../styles/RecipeSection.style";

type RecipeInstructionsProps = {
  instructions: string;
};

function RecipeInstructions({ instructions }: RecipeInstructionsProps) {
  const sanitizedArray = useMemo(() => {
    if (instructions === "No Instructions Found") return [];
    const removedHeader = instructions.replace(/^[Ii]nstruction\S*\s+/, "");
    const instructionsArray = removedHeader.split(/\.(?:\)|(?:\s+\())*/);
    const removedTagArray = instructionsArray.map(
      (instruction: string) => instruction.replace(/<[^>]*>/g, "")
    );
    const nonEmptyInstructionsArray = removedTagArray.filter(
      (item: string) => item !== "" && 
                        item.match(/^\d+$/) === null 
    );
    return nonEmptyInstructionsArray;
  }, [instructions]);

  return (
    <StyledRecipeSection>
      <h3>Instructions</h3>
      {!sanitizedArray || sanitizedArray.length === 0 ? (
        <p>No Instructions Found</p>
      ) : (
        <ol>
          {sanitizedArray.map((instruction, index) => (
            <li key={`istep${index}`}>{instruction}</li>
          ))}
        </ol>
      )}
    </StyledRecipeSection>
  );
}

export default RecipeInstructions;
