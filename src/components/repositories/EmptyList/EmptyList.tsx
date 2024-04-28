import { PackageOpen } from "lucide-react";
import { FC } from "react";

// Component display when the repositories list is empty for certain organization
export const EmptyList: FC<{ organization: string }> = ({ organization }) => {
  return (
    <div className="flex flex-1 items-center justify-start h-auto">
      <div className="text-4xl flex-1 flex-col items-center flex justify-center">
        <PackageOpen className="text-primary py-4" size={100} />
        <h2 className="text-xl font-semibold mb-4">
          Your repositories List is empty
        </h2>
        <p className="text-lg text-muted-foreground mb-4">
          there are no repositories in{" "}
          <span className=" font-bold">{organization}</span> organization
        </p>
      </div>
    </div>
  );
};
