import { createContext } from "react";

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
});

export default FavoriteContext;
