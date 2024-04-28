import { useRepositories } from "@/hooks/useRepositories";
import { useCallback, useEffect, useMemo, useState } from "react";

const ITEM_PER_PAGE = 30;

export const useRepositoriesList = (organization: string) => {
  const {
    isLoading,
    mutate: fetchRepositoriesList,
    data: repositories,
  } = useRepositories();

  const [reqoritstoryQuery, setReqoritstoryQuery] = useState(
    `org:${organization}`
  );

  const handleFilterChange = useCallback(() => {
    (filterBy: string) => {
      setReqoritstoryQuery(filterBy);
    };
  }, []);

  const hasActiveFilter = useMemo(
    () => reqoritstoryQuery && reqoritstoryQuery !== `org:${organization}`,
    [organization, reqoritstoryQuery]
  );

  useEffect(() => {
    reqoritstoryQuery &&
      fetchRepositoriesList(`${reqoritstoryQuery}&per_page=${ITEM_PER_PAGE}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reqoritstoryQuery, organization]);

  useEffect(() => {
    setReqoritstoryQuery(`org:${organization}`);
  }, [organization]);

  return {
    repositories,
    hasActiveFilter,
    handleFilterChange,
    isLoading,
  };
};
