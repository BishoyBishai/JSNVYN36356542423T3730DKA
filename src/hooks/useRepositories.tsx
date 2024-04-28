import { fetchRepositories } from "@/api/organizations";
import { useMutation } from "react-query";
import { useToast } from "@/hooks/useToast";
import { AxiosError } from "axios";

// hook to fetch all repositories
export const useRepositories = () => {
  const { toast } = useToast();

  return useMutation("repositories", fetchRepositories, {
    onError(error: AxiosError) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    },
  });
};
