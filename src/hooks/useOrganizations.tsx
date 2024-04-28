import { fetchOrganizations } from "@/api/organizations";
import { useQuery } from "react-query";
import { useToast } from "@/hooks/useToast";
import { AxiosError } from "axios";

// hook to fetch all organizations
export const useOrganizations = () => {
  const { toast } = useToast();

  return useQuery("organizations", fetchOrganizations, {
    onError(error: AxiosError) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    },
  });
};
