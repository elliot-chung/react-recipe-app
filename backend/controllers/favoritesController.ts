import { Request, Response } from "express";
import User from "../models/user.model";
import FavoriteList from "../models/favoritelist.model";

interface Recipe {
  title: string;
  imageUrl: string;
  recipeId: number;
}

function checkInvalidUser(req: Request, res: Response) {
  if (!req.user) res.status(401).send("You are not logged in");
  return !req.user;
}

async function addRecipetoList(userId: string, recipe: Recipe, listId: string) {
  let list = await FavoriteList.findById(listId);
  if (list.userId !== userId) return;
  list.listItems.push(recipe);
  await list.save();
  return list;
}

async function addEmptyListDB(userId: string, listName: string) {
  const userPromise = User.findById(userId);
  const listPromise = FavoriteList.create({
    listName: listName,
    userId: userId,
    listItems: [],
  });
  const promiseList = await Promise.all([userPromise, listPromise]);
  const user = promiseList[0];
  const list = promiseList[1];
  user.favorites.push(list._id);
  await user.save();
  return list;
}

export async function getFavorites(req: Request, res: Response) {
  if (checkInvalidUser(req, res)) return;
  const userId: string = req.user?.id || "";
  const user = await User.findById(userId);
  if (!user) return res.status(404).send("User not found");
  const favorites = user.favorites;
  const lists = await FavoriteList.find({ _id: { $in: favorites } });
  res.status(200).send(lists);
}

export async function addFavorite(req: Request, res: Response) {
  if (checkInvalidUser(req, res)) return;

  console.log(req.body);

  const userId: string = req.user?.id || "";
  const recipe: Recipe = req.body.recipe;
  const listIds: [string] = req.body.listIds;
  const listNames: [string] = req.body.listNames;
  if (!userId || !recipe || !(listIds || listNames))
    return res.status(400).send("Malformed request");

  const newListPromises = listNames.map(listName => {
    try {
      return addEmptyListDB(userId, listName);
    } catch (error) {
      return;
    }
  });

  const newLists = await Promise.all(newListPromises);
  if (listNames.length !== newLists.length)
    return res.status(500).send("Error creating new lists");

  const newListIds = newLists.map(list => list._id);
  const listIdsToAddTo = listIds.concat(newListIds);

  const addToListPromises = listIdsToAddTo.map(listId => {
    try {
      return addRecipetoList(userId, recipe, listId);
    } catch {
      return;
    }
  });

  const finalLists = await Promise.all(addToListPromises);
  if (listIdsToAddTo.length !== finalLists.length)
    return res.status(500).send("Error adding recipe to lists");
  return res.status(200).send("Added to favorites");
}

export function removeFavorites(req: Request, res: Response) {
  if (checkInvalidUser(req, res)) return;
}

export function moveFavorites(req: Request, res: Response) {
  if (checkInvalidUser(req, res)) return;
}

export function copyFavorites(req: Request, res: Response) {
  if (checkInvalidUser(req, res)) return;
}

export function addEmptyList(req: Request, res: Response) {
  if (checkInvalidUser(req, res)) return;
}

export function removeList(req: Request, res: Response) {
  if (checkInvalidUser(req, res)) return;
}
