import { useMemo, useState } from "react";

function useFavorite() {
  const [editMode, setEditMode] = useState(false);

  const [listId, setListId] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const [toDelete, setToDelete] = useState(false);
  const [toMove, setToMove] = useState(false);

  const listMode = useMemo(() => {
    if (editMode && selected.length === 0) return "edit";
    if (editMode && selected.length > 0) return "select";
    return "view";
  }, [editMode, selected]);

  return {
    editMode,
    setEditMode,
    listId,
    setListId,
    selected,
    setSelected,
    toDelete,
    setToDelete,
    toMove,
    setToMove,
    listMode,
  };
}

export default useFavorite;
