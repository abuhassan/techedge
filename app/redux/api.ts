import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '@/types'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
    addToCart: builder.mutation<void, { productId: string; quantity: number }>({
      query: (body) => ({
        url: 'cart',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useGetProductsQuery, useAddToCartMutation } = api