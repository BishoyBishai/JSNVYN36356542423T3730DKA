import usePagination from "@/hooks/usePagination";
import { useRepositories } from "@/hooks/useRepositories";
import { useCallback, useEffect, useMemo, useState } from "react";

const ITEM_PER_PAGE = 30;

export const useRepositoriesList = (organization: string) => {
  const {
    isLoading,
    mutate: fetchRepositoriesList,
    data: repositories,
  } = useRepositories();

  const {
    paginate,
    currentPage,
    isFirst,
    isLast,
    reset: resetPagination,
  } = usePagination({
    itemPerPage: ITEM_PER_PAGE,
    totalItems: repositories?.total_count || 0,
  });

  const [reqoritstoryQuery, setReqoritstoryQuery] = useState(
    `org:${organization}`
  );

  const handleFilterChange = useCallback(() => {
    (filterBy: string) => {
      resetPagination();
      setReqoritstoryQuery(filterBy);
    };
  }, [resetPagination]);

  const hasActiveFilter = useMemo(
    () => reqoritstoryQuery && reqoritstoryQuery !== `org:${organization}`,
    [organization, reqoritstoryQuery]
  );

  useEffect(() => {
    reqoritstoryQuery &&
      fetchRepositoriesList(
        `${reqoritstoryQuery}&per_page=${ITEM_PER_PAGE}&page=${currentPage}`
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reqoritstoryQuery, currentPage, organization]);

  useEffect(() => {
    resetPagination();
    setReqoritstoryQuery(`org:${organization}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [organization]);

  return {
    repositories,
    hasActiveFilter,
    handleFilterChange,
    isLoading,
    paginate,
    currentPage,
    isFirst,
    isLast,
  };
};
