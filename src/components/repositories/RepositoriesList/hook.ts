import { useRepositories } from "@/hooks/useRepositories";
import { useEffect, useMemo, useState } from "react";

const ITEM_PER_PAGE = 30;

export const useRepositoriesList = (organization: string) => {
  const {
    isLoading,
    mutate: fetchRepositoriesList,
    data: repositories,
  } = useRepositories();

  const [repositoryQuery, setRepositoryQuery] = useState(`org:${organization}`);

  const hasActiveFilter = useMemo(
    () => repositoryQuery !== `org:${organization}`,
    [organization, repositoryQuery]
  );

  useEffect(() => {
    fetchRepositoriesList(`${repositoryQuery}&per_page=${ITEM_PER_PAGE}`);
  }, [repositoryQuery, fetchRepositoriesList]);

  useEffect(() => {
    setRepositoryQuery(`org:${organization}`);
  }, [organization]);

  return {
    repositories,
    hasActiveFilter,
    handleFilterChange: setRepositoryQuery,
    isLoading,
  };
};
