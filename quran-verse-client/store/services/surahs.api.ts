import { baseApi } from "../baseApi";

type GetAllSurahsArg = {
  page?: number;
  limit?: number;
};

type Surah = {
  id: number;
  name: string;
  transliteration: string;
  total_verses: number;
  type: string;
};

type SurahListResponse = {
  success: boolean;
  data: Surah[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

export const surahApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSurahs: builder.query<SurahListResponse, GetAllSurahsArg>({
      query: ({ page = 1, limit = 12 } = {}) => ({
        url: "/surahs",
        method: "GET",
        params: { page, limit },
      }),
      providesTags: ["Surahs"],
    }),

    getSingleSurah: builder.query({
      query: ({ id, page = 1, limit = 10 }) => ({
        url: `/surahs/${id}?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["Surahs"],
    }),

searchAyah: builder.query({
  query: ({ q, surahId }: { q: string; surahId?: number }) => ({
    url: "/surahs/search", // ✅ ALWAYS SAME ENDPOINT
    method: "GET",
    params: {
      q,
      ...(surahId ? { surahId } : {}),
    },
  }),
}),

  }),

  overrideExisting: true,
});

export const {
  useGetAllSurahsQuery,
  useGetSingleSurahQuery,
  useSearchAyahQuery,
} = surahApi;
