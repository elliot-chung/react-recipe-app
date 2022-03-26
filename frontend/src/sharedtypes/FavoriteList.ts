import ListItem from "./ListItem";

interface FavoriteList {
  listName: string;
  userId: string;
  _id: string;
  listItems: ListItem[];
}

export default FavoriteList;
