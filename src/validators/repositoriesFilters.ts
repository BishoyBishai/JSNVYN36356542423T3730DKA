import { z } from "zod";

const isPositiveIntOptional = (value: string | undefined): boolean => {
  return value === undefined || (Number.isInteger(+value) && +value > 0);
};

/**
 * Create a zod schema for repositories form validation
 */
export const repositoriesFiltersSchema = z
  .object({
    repo: z.string().optional(),
    minStars: z.string().optional().refine(isPositiveIntOptional, {
      message: "Minimum Stars must be a positive integer",
    }),
    maxStars: z.string().optional().refine(isPositiveIntOptional, {
      message: "Maximum Stars must be a positive integer",
    }),
  })
  .refine(
    ({ minStars, maxStars }) => {
      return !(maxStars && !minStars);
    },
    {
      message: "Minimum stars is required when Maximum stars is provided",
      path: ["minStars"],
    }
  )
  .refine(
    ({ minStars, maxStars }) => {
      return !(minStars && !maxStars);
    },
    {
      message: "Maximum stars is required when Minimum stars is provided",
      path: ["maxStars"],
    }
  )
  .refine(
    ({ minStars, maxStars }) => {
      return !(
        minStars &&
        maxStars &&
        parseInt(minStars) >= parseInt(maxStars)
      );
    },
    {
      message: "Maximum stars must be more than Minimum stars",
      path: ["maxStars"],
    }
  );

/**
 * Extract repositories filters inputs type from z schema
 */
export type TRepositoriesFilters = z.infer<typeof repositoriesFiltersSchema>;
