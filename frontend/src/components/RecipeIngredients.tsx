import React from "react";
import StyledRecipeIngredients from "../styles/RecipeSection.style";

type Ingredient = {
  id: number;
  name: string;
  amount: number;
  unit: string;
};

type RecipeIngredientsProps = {
  ingredients: Ingredient[];
};

function toFraction(value: number) {
  if (value % 1 === 0) {
    return value.toString();
  }
  const denominators = [2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 32, 64];
  const results = denominators.map(denominator => {
    let str = "";
    let numerator = value;
    if (Math.floor(value)) str += Math.floor(value);
    if ((value * denominator) % 1 < 0.5) {
      numerator = (value % 1) * denominator;
    }
    if ((value * denominator) % 1 >= 0.5) {
      numerator = ((value % 1) + 1) * denominator;
    }
    if (numerator % 1 < 0.001) numerator = Math.floor(numerator);
    return `${str} ${numerator}/${denominator}`;
  });
  return results.reduce((a, b) => (a.length <= b.length ? a : b));
}

function RecipeIngredients({ ingredients }: RecipeIngredientsProps) {
  return (
    <StyledRecipeIngredients>
      <h3>Ingredients</h3>
      {typeof ingredients === "string" ? (
        <p>{ingredients}</p>
      ) : (
        <ul>
          {ingredients.map((ingredient, ind) => (
            <li key = {`${ingredient.id}-${ind}`} >
              {toFraction(ingredient.amount)}{" "}
              {ingredient.unit}{" "}
              {ingredient.name}
            </li>
          ))}
        </ul>
      )}
    </StyledRecipeIngredients>
  );
}

export default RecipeIngredients;
