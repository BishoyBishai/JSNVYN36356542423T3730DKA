import { FC } from "react";
import { EmptyList } from "../EmptyList";
import { PageLoader } from "@/components/layout/PageLoader";
import { useRepositoriesList } from "./hook";

interface IRepositoriesListProps {
  organization: string;
}

// Component displays a list of repositories od certain organization
export const RepositoriesList: FC<IRepositoriesListProps> = ({
  organization,
}) => {
  const { isLoading, repositories } = useRepositoriesList(organization);

  return (
    <div className="py-8">
      {isLoading && <PageLoader />}

      {repositories?.items.length === 0 ? (
        <EmptyList organization={organization} />
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8">
            {repositories?.items.map((repo) => (
              <div key={repo.id}>{repo.name}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
