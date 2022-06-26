import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import FavoriteList from "../models/favoritelist.model";

interface Recipe {
  title: string;
  imageUrl: string;
  recipeId: number;
}

async function addRecipetoList(userId: string, recipe: Recipe, listId: string) {
  let list = await FavoriteList.findById(listId);
  if (list.userId !== userId) throw new Error("Unauthorized: This list does not belong to you");
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

export async function getFavorites(req: Request, res: Response, next: NextFunction) {
  try {
    const userId: string = req.user?.id || "";
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");
    const favorites = user.favorites;
    const lists = await FavoriteList.find({ _id: { $in: favorites } });
    res.status(200).send(lists);
  } catch(error) {
    next(error);
  }
}

export async function addFavorite(req: Request, res: Response, next: NextFunction) {
  try {
    const userId: string = req.user?.id || "";
    const recipe: Recipe = req.body.recipe;
    const listIds: [string] = req.body.listIds;
    const listNames: [string] = req.body.listNames;
    if (!userId || !recipe || !(listIds || listNames))
      return res.status(400).send("Malformed request");

    const newListPromises = listNames.map(listName => {
      return addEmptyListDB(userId, listName);
    });

    const newLists = await Promise.all(newListPromises);
    if (listNames.length !== newLists.length)
      return res.status(500).send("Error creating new lists");

    const newListIds = newLists.map(list => list._id);
    const listIdsToAddTo = listIds.concat(newListIds);

    const addToListPromises = listIdsToAddTo.map(listId => {
      return addRecipetoList(userId, recipe, listId);
    });

    const finalLists = await Promise.all(addToListPromises);
    if (listIdsToAddTo.length !== finalLists.length)
      throw new Error("Error adding recipe to lists");
    return res.status(200).send("Added to favorites");
  } catch(error) {
    next(error);
  }
}

export async function removeFavorites(req: Request, res: Response, next: NextFunction) {
  try {
    const userId: string = req.user?.id || "";
    const listId: string = req.body.listId;
    const idsToDelete: [number] = req.body.idsToDelete;
    if (!userId || !listId || !idsToDelete)
      throw new Error("Malformed request");
    const list = await FavoriteList.findById(listId);
    if (!list) throw new Error("List not found");
    if (list.userId !== userId) throw new Error("Unauthorized: This list does not belong to you");
    const listItems = list.listItems;
    const newListItems = listItems.filter(
      (item: Recipe) => !idsToDelete.includes(item.recipeId)
    );
    list.listItems = newListItems;
    await list.save();
    return res.status(200).send("Removed from favorites");
  } catch(error) {
    next(error);
  }
}

export async function addEmptyList(req: Request, res: Response, next: NextFunction) {
  try {
    const userId: string = req.user?.id || "";
    const listName: string = req.body.listName;
    if (!userId || !listName) throw new Error("Malformed request");
    await addEmptyListDB(userId, listName);
    return res.status(200).send("Added new list");
  } catch(error) {
    next(error);
  }
}

export async function removeList(req: Request, res: Response, next: NextFunction) {
  try {
    const { listId } = req.params;
    const list = await FavoriteList.findById(listId);
    if (!list) throw new Error("List not found");
    if (list.userId !== req.user?.id) throw new Error("Unauthorized: This list does not belong to you");
    await list.remove();
    return res.status(200).send("Removed list");
  } catch(error) {
    next(error);
  }
}

export async function renameList(req: Request, res: Response, next: NextFunction) {
  try {
    const { listId } = req.params;
    const { newName } = req.body;
    const list = await FavoriteList.findById(listId);
    if (!list) return res.status(404).send("List not found");
    if (list.userId !== req.user?.id) return res.status(401).send("Unauthorized");
    list.listName = newName;
    await list.save();
    return res.status(200).send("Renamed list");
  } catch(error) {
    next(error);
  }
}
