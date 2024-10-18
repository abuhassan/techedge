import { Product } from "@prisma/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    // Define your endpoints here
    getProducts: builder.query<Product[], void>({
      query: () => "products",
    }),
    // Add more endpoints as needed
  }),
});

export const { useGetProductsQuery } = apiSlice;
