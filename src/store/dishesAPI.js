import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dishesApi = createApi({
  reducerPath: 'dishesApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5005/api/product'}),
  endpoints: (build) => ({
    getDishes: build.query({
      query: () => '/',
    }),
    addDish: build.mutation({
      query: (body) => ({
        url: 'create',
        method: 'POST',
        body
      })
    })
  })
})

export const {useGetDishesQuery, useAddDishMutation} = dishesApi