import React, { useEffect, useState } from "react";

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

  const handleClick = () => {
    if (alreadyFavorite) return;
    setSelected(!selected);
    if (selected) onDeselect(id);
    else onSelect(id);
  };

  const remove = () => {
    onDeselect(name);
    setShowing(false);
  };

  return showing ? (
    <div
      role="checkbox"
      tabIndex={0}
      aria-checked={selected}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      {!id && (
        <button type="button" onClick={remove}>
          ❌
        </button>
      )}
      <p>{name}</p>
      {selected && <p>✔️</p>}
    </div>
  ) : null;
}

export default FavoriteOption;
