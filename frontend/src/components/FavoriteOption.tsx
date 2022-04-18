import React, { useCallback, useEffect, useState } from "react";
import StyledFavoriteOption from "../styles/FavoriteOption.style";

type FavoriteOptionProps = {
  id: string;
  alreadyFavorite: boolean;
  name: string;
  onSelect: (id: string) => void;
  onDeselect: (id: string) => void;
};

function FavoriteOption({
  id,
  alreadyFavorite,
  name,
  onSelect,
  onDeselect,
}: FavoriteOptionProps) {
  const [showing, setShowing] = useState(true);
  const [selected, setSelected] = useState(!!alreadyFavorite);

  useEffect(() => {
    if (!id) {
      onSelect(name);
    }
  }, [id, onSelect, name]);

  const remove = useCallback(() => {
    onDeselect(name);
    setShowing(false);
  }, [name, onDeselect]);

  const handleClick = useCallback(() => {
    if (!id) {
      remove();
      return;
    }
    if (alreadyFavorite) return;
    setSelected(!selected);
    if (selected) onDeselect(id);
    else onSelect(id);
  }, [alreadyFavorite, id, onDeselect, onSelect, remove, selected]);

  return showing ? (
    <StyledFavoriteOption
      role="checkbox"
      tabIndex={0}
      aria-checked={selected}
      onClick={handleClick}
      onKeyDown={handleClick}
      newList={!id}
    >
      <p>{name}</p>
      {selected && <p>✔️</p>}
    </StyledFavoriteOption>
  ) : null;
}

export default FavoriteOption;
