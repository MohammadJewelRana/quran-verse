import { baseApi } from "../baseApi";

export const surahApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // 🔹 Get all surahs
    getAllSurahs: builder.query({
      query: () => ({
        url: "/surahs",
        method: "GET",
      }),
      providesTags: ["Surahs"],
    }),

    // 🔹 Get single surah
    getSingleSurah: builder.query({
      query: (id: string) => ({
        url: `/surahs/${id}`,
        method: "GET",
      }),
      providesTags: ["Surahs"],
    }),

    // 🔹 Search ayah
    searchAyah: builder.query({
      query: (searchTerm: string) => {
        const params = new URLSearchParams();

        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }

        return {
          url: "/surahs/search",
          method: "GET",
          params,
        };
      },
      providesTags: ["Surahs"],
    }),

  }),

  overrideExisting: true,
});


// ✅ EXPORT HOOKS FROM SERVICE (IMPORTANT)
export const {
  useGetAllSurahsQuery,
  useGetSingleSurahQuery,
  useSearchAyahQuery,
} = surahApi;