import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dishesApi = createApi({
  reducerPath: 'dishesApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5005/api'}),
  endpoints: (build) => ({
    getDishes: build.query({
      query: () => 'dishes',
    }),
    addDish: build.mutation({
      query: (body) => ({
        url: 'dishes/create',
        method: 'POST',
        body
      })
    })
  })
})

export const {useGetDishesQuery, useAddDishesMutation} = dishesApi