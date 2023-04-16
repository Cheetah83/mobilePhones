import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030/jsonstore" }),
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => `phones`,
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;