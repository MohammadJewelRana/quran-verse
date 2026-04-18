import toast from "react-hot-toast";
import {
  useGetAllSurahsQuery,
  useGetSingleSurahQuery,
  useSearchAyahQuery,
} from "../services/surahs.api";

//  Get All Surahs
export const useGetAllSurahs = () => {
  const { data, error, isLoading } = useGetAllSurahsQuery(undefined);

  let surahs: any[] = [];

  if (data?.success) {
    surahs = data.data;
  }

  if (error) {
    toast.error("Failed to fetch surahs!");
  }

  return {
    surahs,
    isLoading,
    isError: !!error,
  };
};

//  Get Single Surah
export const useGetSingleSurah = (id: string) => {
  const { data, error, isLoading } = useGetSingleSurahQuery(id, {
    skip: !id,
  });

  let surah = null;

  if (data?.success) {
    surah = data.data;
  }

  if (error) {
    toast.error("Failed to fetch surah!");
  }

  return {
    surah,
    isLoading,
    isError: !!error,
  };
};

//  Search Ayah
export const useSearchAyah = (searchTerm: string) => {
  const { data, error, isLoading } = useSearchAyahQuery(searchTerm, {
    skip: !searchTerm,
  });

  let results: any[] = [];

  if (data?.success) {
    results = data.data;
  }

  if (error) {
    toast.error("Search failed!");
  }

  return {
    results,
    isLoading,
    isError: !!error,
  };
};
