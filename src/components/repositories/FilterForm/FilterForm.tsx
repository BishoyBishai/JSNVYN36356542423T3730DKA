import {
  TRepositoriesFilters,
  repositoriesFiltersSchema,
} from "@/validators/repositoriesFilters";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "@/components/layout/form";
import { Button } from "@/components/ui/Button";
import { useEffect } from "react";

// Component display filters options
export const FilterForm = ({
  onFilterApply,
  organizationName,
}: {
  onFilterApply: (query: string) => void;
  organizationName: string;
}) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<TRepositoriesFilters>({
    resolver: zodResolver(repositoriesFiltersSchema),
    mode: "onBlur",
  });

  const clearFilters = () => {
    reset();
    const query = `org:${organizationName}`;
    onFilterApply(query);
  };

  const applyFilters = (data: TRepositoriesFilters) => {
    if (isValid) {
      let query = `org:${organizationName}`;

      if (data.repo) {
        query += `+${data.repo.trim()} in:name`;
      }

      if (data.minStars) {
        query += `+stars:${data.minStars.trim()}..${data.maxStars?.trim()}`;
      }

      onFilterApply(query);
    }
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [organizationName]);
  return (
    <div className="flex gap-4 items-center justify-between pb-4">
      <form className="w-full" onSubmit={handleSubmit(applyFilters)}>
        <div className="lg:flex w-full gap-2">
          <div className="lg:w-1/2">
            <InputForm
              label="Filter by repository name"
              register={register("repo")}
              error={errors.repo}
            />
          </div>
          <div className="lg:w-1/4">
            <InputForm
              label="Minimum stars"
              register={register("minStars")}
              error={errors.minStars}
            />
          </div>
          <div className="lg:w-1/4">
            <InputForm
              label="Maximum stars"
              register={register("maxStars")}
              error={errors.maxStars}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button onClick={clearFilters} variant="destructive">
            Clear filters
          </Button>
          <Button disabled={!isValid} type="submit">
            Apply Filter
          </Button>
        </div>
      </form>
    </div>
  );
};
