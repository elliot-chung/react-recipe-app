import React, { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StyledButton from "../styles/Button.style";
import StyledSearchPageButtons from "../styles/SearchPageButtons.style";

type SearchPageButtonsProps = {
  totalResults: number;
};

function SearchPageButtons({ totalResults }: SearchPageButtonsProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const page = useMemo(
    () => Number(location.search.match(/page=(\d+)/)?.[1]),
    [location.search]
  );
  const query = useMemo(
    () => location.search.match(/query=([^&]+)/)?.[1],
    [location.search]
  );

  const totalPages = useMemo(
    () => {
      // only update the value of total pages if totalResults is a number
      if (typeof totalResults === "number") {
        return Math.ceil(totalResults / 10);
      } else {
        return 100;
      }
    },[totalResults]
  );

  const nextPage = useCallback(() => {
    if (page < totalPages) {
      navigate(`/search?query=${query}&page=${page + 1}`);
    }
  }, [page, totalPages, navigate, query]);

  const prevPage = useCallback(() => {
    if (page > 1) {
      navigate(`/search?query=${query}&page=${page - 1}`);
    }
  }, [page, navigate, query]);

  return (
    <StyledSearchPageButtons>
      <StyledButton onClick={prevPage} disabled={page === 1}>
        {"<<"}
      </StyledButton>
      <p>{`${page.toString()}/${totalPages}`}</p>
      <StyledButton onClick={nextPage} disabled={page === totalPages}>
        {">>"}
      </StyledButton>
    </StyledSearchPageButtons>
  );
}

export default SearchPageButtons;
