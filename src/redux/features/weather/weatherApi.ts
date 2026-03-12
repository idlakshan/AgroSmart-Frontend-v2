import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../../../utils/baseURL';

export interface WeatherData {
  avg_temp_annual: number;
  avg_humidity_annual: number;
  total_rainfall_annual: number;
}

export type District = string;

const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL()}/api/`,
    prepareHeaders: async (headers) => {
      const token = await window?.Clerk?.session?.getToken?.();
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWeatherByDistrict: builder.mutation<WeatherData, District>({
      query: (district) => ({
        url: `weather/${district}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetWeatherByDistrictMutation } = weatherApi;
export default weatherApi;