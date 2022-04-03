import { AxiosError } from "axios";
import { createContext } from "react";
import FavoriteList from "../sharedtypes/FavoriteList";

type FavoriteContextType = {
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  listId: string;
  setListId: React.Dispatch<React.SetStateAction<string>>;
  selected: number[];
  setSelected: React.Dispatch<React.SetStateAction<number[]>>;
  toDelete: boolean;
  setToDelete: React.Dispatch<React.SetStateAction<boolean>>;
  listToDelete: string;
  setListToDelete: React.Dispatch<React.SetStateAction<string>>;
  addFavorite: boolean;
  setAddFavorite: React.Dispatch<React.SetStateAction<boolean>>;
  listMode: string;
  interfaceKey: number;
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  error: AxiosError;
  lists: FavoriteList[];
};

const FavoriteContext = createContext<FavoriteContextType>({
  editMode: false,
  setEditMode: () => {},
  listId: "",
  setListId: () => {},
  selected: [],
  setSelected: () => {},
  toDelete: false,
  setToDelete: () => {},
  listToDelete: "",
  setListToDelete: () => {},
  addFavorite: false,
  setAddFavorite: () => {},
  listMode: "",
  interfaceKey: 0,
  isSuccess: false,
  isLoading: false,
  isError: false,
  error: {} as AxiosError,
  lists: [],
});

export default FavoriteContext;
