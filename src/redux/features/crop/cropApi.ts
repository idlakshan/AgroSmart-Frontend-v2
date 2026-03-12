import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../../utils/baseURL";

export interface CropDetails {
  id: string;
  name: string;
  image: string;
  description: string;
  confidence: number;
  category: string;
  growthPeriod?: string;
  waterRequirements?: string;
  soilRequirements?: string;
  avgTemperature?: string;
  avgHumidity?: string;
  rainfall?: string;
  fertilizers?: string;
}

export interface CropSearchResult {
  confidence: number;
  crop: CropDetails;
}

export type CreateCropRequest = Omit<CropDetails, "id" | "confidence">;

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
    createCrop: builder.mutation<CropDetails, CreateCropRequest>({
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

export const { useCreateCropMutation, useLazyGetCropsForSearchQueryQuery } =
  cropApi;

export default cropApi;
