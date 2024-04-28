import { IOrganization } from "@/interfaces/organizations";
import { IRepositoryResponse } from "@/interfaces/repositories";
import axios from "axios";

const API_URL = "https://api.github.com";

// Fetches the list of organizations
export const fetchOrganizations = async () => {
  try {
    const response = await axios.get(`${API_URL}/organizations`);
    return response.data as IOrganization[];
  } catch (error) {
    throw new Error("Failed to fetch organizations");
  }
};

// Fetches the list of repositories
export const fetchRepositories = async (query: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/search/repositories?q=${query}`
    );
    return response.data as IRepositoryResponse;
  } catch (error) {
    throw new Error("Failed to fetch repositories");
  }
};
