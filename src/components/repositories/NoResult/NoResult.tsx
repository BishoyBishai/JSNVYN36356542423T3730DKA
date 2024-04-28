import { PackageSearch } from "lucide-react";
import { FC } from "react";

// Component display when no search results are found
export const NoResult: FC = () => {
  return (
    <div className="flex flex-1 items-center justify-start h-auto">
      <div className="text-4xl flex-1 flex-col items-center flex justify-center">
        <PackageSearch className="text-primary py-4" size={100} />
        <h2 className="text-xl font-semibold mb-4">No Results Found</h2>
        <p className="text-lg text-muted-foreground mb-4">
          There are no search results based on your filter criteria..
        </p>
      </div>
    </div>
  );
};
