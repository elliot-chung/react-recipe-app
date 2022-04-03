import { useEffect, useMemo, useState } from "react";

function useFavorite() {
  const [editMode, setEditMode] = useState(false);

  const [listId, setListId] = useState("");
  const [selected, setSelected] = useState<number[]>([]);

  const [toDelete, setToDelete] = useState(false);
  const [listToDelete, setListToDelete] = useState("");
  const [addFavorite, setAddFavorite] = useState(false);

  const [interfaceKey, setInterfaceKey] = useState(Date.now());

  const listMode = useMemo(() => {
    if (editMode && selected.length === 0) return "edit";
    if (editMode && selected.length > 0) return "select";
    return "view";
  }, [editMode, selected]);

  useEffect(() => {
    if (!editMode) {
      setListId("");
      setSelected([]);
      setToDelete(false);
      setListToDelete("");
      setAddFavorite(false);
      setInterfaceKey(Date.now());
    }
  }, [editMode]);

  return {
    editMode,
    setEditMode,
    listId,
    setListId,
    selected,
    setSelected,
    toDelete,
    setToDelete,
    listToDelete,
    setListToDelete,
    addFavorite,
    setAddFavorite,
    listMode,
    interfaceKey,
  };
}

export default useFavorite;
