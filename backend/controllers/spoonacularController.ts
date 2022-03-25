import axios, { AxiosRequestConfig } from "axios";
import { Request, Response } from "express";

interface SpoonacularSearchParams {
  query: string;
}

async function spoonacularSearch(
  spoonacularSearchParams: SpoonacularSearchParams
) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
    params: spoonacularSearchParams,
    headers: {
      "x-rapidapi-host": process.env.RAPID_API_HOST,
      "x-rapidapi-key": process.env.RAPID_API_KEY,
    },
  };
  return axios(config);
}

async function spoonacularRecipeInfo(id: number) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
    headers: {
      "x-rapidapi-host": process.env.RAPID_API_HOST,
      "x-rapidapi-key": process.env.RAPID_API_KEY,
    },
  };
  return axios(config);
}

export async function simpleSearch(req: Request, res: Response) {
  console.log(req.body.query);
  const searchParams: SpoonacularSearchParams = {
    query: req.body.query,
  };
  const response = await spoonacularSearch(searchParams);
  res.status(response.status).send(response.data);
}

export async function getRecipeInfo(req: Request, res: Response) {
  console.log(req.body);
  const id = req.body.id;
  const response = await spoonacularRecipeInfo(id);
  res.status(response.status).send(response.data);
}
