import { AutoCompleteSelect } from "@/components/layout/AutoCompleteSelect/AutoCompleteSelect";
import { PageLoader } from "@/components/layout/PageLoader";
import { PageTitle } from "@/components/layout/PageTitle";
import { EmptyList } from "@/components/organizations/EmptyList";
import { RepositoriesList } from "@/components/repositories/RepositoriesList";
import { useOrganizations } from "@/hooks/useOrganizations";
import { useCallback, useState } from "react";

export const Home = () => {
  const { isLoading, data: organizationList } = useOrganizations();
  const [selectedOrganization, setSelectOrganization] = useState<string>();
  {
    isLoading && <PageLoader />;
  }
  const handleOnSelectOrganization = useCallback((organization: string) => {
    setSelectOrganization(organization);
  }, []);

  return (
    <div className="py-4 w-full flex flex-col">
      <PageTitle
        title="Frequenz"
        subTitle="Let's browse repositories on GitHub"
        withAction={
          <AutoCompleteSelect
            label="Select organization"
            items={
              organizationList?.map((organization) => ({
                value: organization.login,
                label: organization.login,
              })) || []
            }
            onSelect={handleOnSelectOrganization}
          />
        }
      />
      {!selectedOrganization && <EmptyList />}
      {selectedOrganization && (
        <RepositoriesList organization={selectedOrganization} />
      )}
    </div>
  );
};
