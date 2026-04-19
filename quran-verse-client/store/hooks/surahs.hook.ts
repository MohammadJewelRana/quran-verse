import toast from "react-hot-toast";
import {
  useGetAllSurahsQuery,
  useGetSingleSurahQuery,
  useSearchAyahQuery,
} from "../services/surahs.api";

export const useGetAllSurahs = (page = 1, limit = 12) => {
  const { data, error, isLoading } = useGetAllSurahsQuery({ page, limit });

  return {
    surahs: data?.data ?? [],
    meta: data?.meta ?? null,
    isLoading,
    isError: !!error,
  };
};
export const useGetSingleSurah = (
  id: string,
  page: number,
  limit: number
) => {
  const { data, error, isLoading, isFetching } = useGetSingleSurahQuery(
    { id, page, limit },
    { skip: !id }
  );

  if (error) {
    toast.error("Failed to fetch surah!");
  }

  return {
    surah: data?.data ?? null,
    isLoading,
    isFetching,
    isError: !!error,
  };
};


export const useSearchAyah = (
  searchTerm: string,
  surahId?: number
) => {
  const { data, error, isLoading } = useSearchAyahQuery(
    { q: searchTerm, surahId },
    {
      skip: !searchTerm,
    }
  );

  if (error) {
    toast.error("Search failed!");
  }

  return {
    results: data?.data ?? [],
    isLoading,
    isError: !!error,
  };
};