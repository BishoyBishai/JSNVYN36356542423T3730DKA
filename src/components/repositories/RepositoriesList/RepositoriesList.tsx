import { FC } from "react";
import { EmptyList } from "../EmptyList";
import { PageLoader } from "@/components/layout/PageLoader";
import { useRepositoriesList } from "./hook";
import { FilterForm } from "../FilterForm";
import { ListPagination } from "@/components/layout/ListPagination";
import { NoResult } from "../NoResult";

interface IRepositoriesListProps {
  organization: string;
}

// Component displays a list of repositories od certain organization
export const RepositoriesList: FC<IRepositoriesListProps> = ({
  organization,
}) => {
  const {
    handleFilterChange,
    isLoading,
    hasActiveFilter,
    repositories,
    isFirst,
    isLast,
    paginate,
    currentPage,
  } = useRepositoriesList(organization);

  return (
    <div className="py-8">
      <FilterForm
        onFilterApply={handleFilterChange}
        organizationName={organization}
      />
      {isLoading && <PageLoader />}

      {hasActiveFilter && !repositories?.items.length ? (
        <NoResult />
      ) : repositories?.items.length === 0 ? (
        <EmptyList organization={organization} />
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8">
            {repositories?.items.map((repo) => (
              <div key={repo.id}>{repo.name}</div>
            ))}
          </div>
          <ListPagination
            isFirst={isFirst}
            isLast={isLast}
            onPageChange={paginate}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
};
