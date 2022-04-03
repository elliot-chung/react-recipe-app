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

export async function removeFavorites(req: Request, res: Response) {
  if (checkInvalidUser(req, res)) return;
  const userId: string = req.user?.id || "";
  const listId: string = req.body.listId;
  const idsToDelete: [number] = req.body.idsToDelete;
  if (!userId || !listId || !idsToDelete)
    return res.status(400).send("Malformed request");
  const list = await FavoriteList.findById(listId);
  if (!list) return res.status(404).send("List not found");
  if (list.userId !== userId) return res.status(401).send("Unauthorized");
  const listItems = list.listItems;
  const newListItems = listItems.filter(
    (item: Recipe) => !idsToDelete.includes(item.recipeId)
  );
  list.listItems = newListItems;
  await list.save();
  return res.status(200).send("Removed from favorites");
}

export async function addEmptyList(req: Request, res: Response) {
  if (checkInvalidUser(req, res)) return;
  const userId: string = req.user?.id || "";
  const listName: string = req.body.listName;
  if (!userId || !listName) return res.status(400).send("Malformed request");
  try {
    await addEmptyListDB(userId, listName);
  } catch (error) {
    return res.status(500).send("Error creating new list");
  }
  return res.status(200).send("Added new list");
}

export async function removeList(req: Request, res: Response) {
  if (checkInvalidUser(req, res)) return;
  const { listId } = req.params;
  const list = await FavoriteList.findById(listId);
  if (!list) return res.status(404).send("List not found");
  if (list.userId !== req.user?.id) return res.status(401).send("Unauthorized");
  await list.remove();
  return res.status(200).send("Removed list");
}

export async function renameList(req: Request, res: Response) {
  if (checkInvalidUser(req, res)) return;
  const { listId } = req.params;
  const { newName } = req.body;
  const list = await FavoriteList.findById(listId);
  if (!list) return res.status(404).send("List not found");
  if (list.userId !== req.user?.id) return res.status(401).send("Unauthorized");
  list.listName = newName;
  await list.save();
  return res.status(200).send("Renamed list");
}
