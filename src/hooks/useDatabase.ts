import { useMutation } from "@tanstack/react-query";
import { getDatabase, getPageDetail } from "../api/databaseApi";

export const useDatabase = () => {
  return useMutation({
    mutationFn: async () => {
      const data = await getDatabase();
      return data.results;
    },
  });
};

export const useBlockDetail = () => {
  return useMutation({
    mutationFn: async (pageId: string) => {
      const data = await getPageDetail(pageId);
      return data.results;
    },
  });
};
