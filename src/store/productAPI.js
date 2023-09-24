import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5005/api/product'}),
  tagTypes: ['Product'],
  endpoints: (build) => ({
    getProduct: build.query({
      query: () => '/',
      providesTags: [
        {type: 'Product', id: 'LIST'}, 
        {type: 'Product', id: 'ADD-ITEM'}],
    }),
    addProduct: build.mutation({
      query: (body) => ({
        url: 'create',
        method: 'POST',
        body,
        //headers: {
        //  Authorization: `Bearer ${getAccessToken()}`
        //}
      }),
      invalidatesTags: [{type: 'Product', id:'ADD-ITEM'}]
    })
  })
})

export const {useGetProductQuery, useAddProductMutation} = productApi