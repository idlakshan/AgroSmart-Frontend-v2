import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../../utils/baseURL";


export interface NewCrop {
  name: string;
  category: string;
  soilTypes: string[];
}

export interface Crop {
  id: string;
  name: string;
  category: string;
  soilTypes: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CropSearchResult {
  id: string;
  name: string;
  category: string;
  soilTypes: string[];
}

export interface CropSearchQuery {
  query: string;
}

const cropApi = createApi({
  reducerPath: "cropApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL()}/api/`,
    prepareHeaders: async (headers) => {
      const token = await window?.Clerk?.session?.getToken();
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createCrop: builder.mutation<Crop, NewCrop>({
      query: (newCrop) => ({
        url: "crops",
        method: "POST",
        body: newCrop,
      }),
    }),

    getCropsForSearchQuery: builder.query<CropSearchResult[], CropSearchQuery>({
      query: ({ query }) =>
        `crops/search/retrieve?query=${encodeURIComponent(query)}`,
    }),
  }),
});

export const {
  useCreateCropMutation,
  useLazyGetCropsForSearchQueryQuery,
} = cropApi;

export default cropApi;